gdjs.Scene1Code = {};
gdjs.Scene1Code.GDBackground1Objects1= [];
gdjs.Scene1Code.GDBackground1Objects2= [];
gdjs.Scene1Code.GDBackground1Objects3= [];
gdjs.Scene1Code.GDBackground2Objects1= [];
gdjs.Scene1Code.GDBackground2Objects2= [];
gdjs.Scene1Code.GDBackground2Objects3= [];
gdjs.Scene1Code.GDBallObjects1= [];
gdjs.Scene1Code.GDBallObjects2= [];
gdjs.Scene1Code.GDBallObjects3= [];
gdjs.Scene1Code.GDFlagObjects1= [];
gdjs.Scene1Code.GDFlagObjects2= [];
gdjs.Scene1Code.GDFlagObjects3= [];
gdjs.Scene1Code.GDGround1Objects1= [];
gdjs.Scene1Code.GDGround1Objects2= [];
gdjs.Scene1Code.GDGround1Objects3= [];
gdjs.Scene1Code.GDGroundBackground1Objects1= [];
gdjs.Scene1Code.GDGroundBackground1Objects2= [];
gdjs.Scene1Code.GDGroundBackground1Objects3= [];
gdjs.Scene1Code.GDDarkBlurObjects1= [];
gdjs.Scene1Code.GDDarkBlurObjects2= [];
gdjs.Scene1Code.GDDarkBlurObjects3= [];
gdjs.Scene1Code.GDMenuButtonObjects1= [];
gdjs.Scene1Code.GDMenuButtonObjects2= [];
gdjs.Scene1Code.GDMenuButtonObjects3= [];
gdjs.Scene1Code.GDHiddenGround1Objects1= [];
gdjs.Scene1Code.GDHiddenGround1Objects2= [];
gdjs.Scene1Code.GDHiddenGround1Objects3= [];
gdjs.Scene1Code.GDArrowObjects1= [];
gdjs.Scene1Code.GDArrowObjects2= [];
gdjs.Scene1Code.GDArrowObjects3= [];
gdjs.Scene1Code.GDPoverCircleObjects1= [];
gdjs.Scene1Code.GDPoverCircleObjects2= [];
gdjs.Scene1Code.GDPoverCircleObjects3= [];
gdjs.Scene1Code.GDBallCountObjects1= [];
gdjs.Scene1Code.GDBallCountObjects2= [];
gdjs.Scene1Code.GDBallCountObjects3= [];
gdjs.Scene1Code.GDBallCountTextObjects1= [];
gdjs.Scene1Code.GDBallCountTextObjects2= [];
gdjs.Scene1Code.GDBallCountTextObjects3= [];
gdjs.Scene1Code.GDBallCountWrapperObjects1= [];
gdjs.Scene1Code.GDBallCountWrapperObjects2= [];
gdjs.Scene1Code.GDBallCountWrapperObjects3= [];
gdjs.Scene1Code.GDNewTiledSpriteObjects1= [];
gdjs.Scene1Code.GDNewTiledSpriteObjects2= [];
gdjs.Scene1Code.GDNewTiledSpriteObjects3= [];

gdjs.Scene1Code.conditionTrue_0 = {val:false};
gdjs.Scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Scene1Code.condition1IsTrue_0 = {val:false};
gdjs.Scene1Code.condition2IsTrue_0 = {val:false};
gdjs.Scene1Code.condition3IsTrue_0 = {val:false};
gdjs.Scene1Code.conditionTrue_1 = {val:false};
gdjs.Scene1Code.condition0IsTrue_1 = {val:false};
gdjs.Scene1Code.condition1IsTrue_1 = {val:false};
gdjs.Scene1Code.condition2IsTrue_1 = {val:false};
gdjs.Scene1Code.condition3IsTrue_1 = {val:false};


gdjs.Scene1Code.userFunc0x82ad20 = function(runtimeScene) {
"use strict";
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const {data} = params

let ball = 0
let level = 0


if(data) {
    const {ballType, levelType} = JSON.parse(data)
    ball = ballType
    level = levelType
}

runtimeScene.getGame().getVariables().get("BallType").setNumber(ball);
runtimeScene.getGame().getVariables().get("Level").setNumber(level);

};
gdjs.Scene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene1Code.userFunc0x82ad20(runtimeScene);

}


};gdjs.Scene1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 100);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - 1);
}}

}


};gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.Scene1Code.GDMenuButtonObjects1});gdjs.Scene1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition1IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7359676);
}
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDArrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene1Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCount"), gdjs.Scene1Code.GDBallCountObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCountText"), gdjs.Scene1Code.GDBallCountTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCountWrapper"), gdjs.Scene1Code.GDBallCountWrapperObjects1);
/* Reuse gdjs.Scene1Code.GDMenuButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PoverCircle"), gdjs.Scene1Code.GDPoverCircleObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallObjects1[i].getBehavior("Physics2").applyPolarImpulse((( gdjs.Scene1Code.GDArrowObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDArrowObjects1[0].getAngle()), 6, (gdjs.Scene1Code.GDBallObjects1[i].getCenterXInScene()), (gdjs.Scene1Code.GDBallObjects1[i].getCenterYInScene()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Scene1Code.GDArrowObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDArrowObjects1[0].getAngle()));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.Scene1Code.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDMenuButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallCountObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallCountWrapperObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountWrapperObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallCountTextObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountTextObjects1[i].hide();
}
}}

}


};gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.Scene1Code.GDMenuButtonObjects1});gdjs.Scene1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition1IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7325804);
}
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


};gdjs.Scene1Code.eventsList4 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("BallCount"), gdjs.Scene1Code.GDBallCountObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCountText"), gdjs.Scene1Code.GDBallCountTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCountWrapper"), gdjs.Scene1Code.GDBallCountWrapperObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Scene1Code.GDMenuButtonObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDBallCountObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountObjects1[i].setPosition((( gdjs.Scene1Code.GDBallCountWrapperObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallCountWrapperObjects1[0].getCenterXInScene()) - 7,(( gdjs.Scene1Code.GDBallCountWrapperObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallCountWrapperObjects1[0].getCenterYInScene()) + 17);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallCountTextObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountTextObjects1[i].setPosition((( gdjs.Scene1Code.GDBallCountWrapperObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallCountWrapperObjects1[0].getCenterXInScene()) + 15,(( gdjs.Scene1Code.GDBallCountWrapperObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallCountWrapperObjects1[0].getCenterYInScene()) - 28);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDMenuButtonObjects1[i].setPosition(2 * gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 200,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) * 0.1);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallCountWrapperObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountWrapperObjects1[i].setPosition(2 * gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 400,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) * 0.1);
}
}}

}


{



}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene1Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("PoverCircle"), gdjs.Scene1Code.GDPoverCircleObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].setPosition((( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getCenterXInScene()),(( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setPosition((( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getCenterXInScene()) + 100,(( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 500, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 500, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDArrowObjects1[i].getAngle() > -(20) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDArrowObjects1[k] = gdjs.Scene1Code.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDArrowObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDArrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PoverCircle"), gdjs.Scene1Code.GDPoverCircleObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAngle(-(20));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].setAngle(-(20));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDArrowObjects1[i].getAngle() < -(70) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDArrowObjects1[k] = gdjs.Scene1Code.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDArrowObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDArrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PoverCircle"), gdjs.Scene1Code.GDPoverCircleObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAngle(-(70));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].setAngle(-(70));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{



}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 0.01;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PoverCircle"), gdjs.Scene1Code.GDPoverCircleObjects1);
{runtimeScene.getVariables().get("Timer").setNumber(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer")));
}{for(var i = 0, len = gdjs.Scene1Code.GDPoverCircleObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPoverCircleObjects1[i].setSize(150 + 2.7 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 150 + 2.7 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.Scene1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 17;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.condition0IsTrue_1.val = false;
gdjs.Scene1Code.condition1IsTrue_1.val = false;
{
gdjs.Scene1Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 17;
}if ( gdjs.Scene1Code.condition0IsTrue_1.val ) {
{
gdjs.Scene1Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 34;
}}
gdjs.Scene1Code.conditionTrue_1.val = true && gdjs.Scene1Code.condition0IsTrue_1.val && gdjs.Scene1Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.condition0IsTrue_1.val = false;
gdjs.Scene1Code.condition1IsTrue_1.val = false;
{
gdjs.Scene1Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 34;
}if ( gdjs.Scene1Code.condition0IsTrue_1.val ) {
{
gdjs.Scene1Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 51;
}}
gdjs.Scene1Code.conditionTrue_1.val = true && gdjs.Scene1Code.condition0IsTrue_1.val && gdjs.Scene1Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.condition0IsTrue_1.val = false;
gdjs.Scene1Code.condition1IsTrue_1.val = false;
{
gdjs.Scene1Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 51;
}if ( gdjs.Scene1Code.condition0IsTrue_1.val ) {
{
gdjs.Scene1Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 68;
}}
gdjs.Scene1Code.conditionTrue_1.val = true && gdjs.Scene1Code.condition0IsTrue_1.val && gdjs.Scene1Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.condition0IsTrue_1.val = false;
gdjs.Scene1Code.condition1IsTrue_1.val = false;
{
gdjs.Scene1Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 68;
}if ( gdjs.Scene1Code.condition0IsTrue_1.val ) {
{
gdjs.Scene1Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 85;
}}
gdjs.Scene1Code.conditionTrue_1.val = true && gdjs.Scene1Code.condition0IsTrue_1.val && gdjs.Scene1Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 85;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDArrowObjects1[i].setAnimation(5);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Scene1Code.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Scene1Code.GDMenuButtonObjects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.condition0IsTrue_1.val = false;
gdjs.Scene1Code.condition1IsTrue_1.val = false;
gdjs.Scene1Code.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDArrowObjects1[i].isVisible() ) {
        gdjs.Scene1Code.condition0IsTrue_1.val = true;
        gdjs.Scene1Code.GDArrowObjects1[k] = gdjs.Scene1Code.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDArrowObjects1.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_1.val ) {
{
gdjs.Scene1Code.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 1;
}if ( gdjs.Scene1Code.condition1IsTrue_1.val ) {
{
gdjs.Scene1Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDMenuButtonObjects1Objects, runtimeScene, true, true);
}}
}
gdjs.Scene1Code.conditionTrue_1.val = true && gdjs.Scene1Code.condition0IsTrue_1.val && gdjs.Scene1Code.condition1IsTrue_1.val && gdjs.Scene1Code.condition2IsTrue_1.val;
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Scene1Code.GDMenuButtonObjects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDMenuButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene1Code.GDBallObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getPointX("")), 0.1), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Scene1Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDBallObjects1[0].getPointY("")), 0.1), "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene1Code.GDBallObjects1);

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDBallObjects1[i].getX() > 1600 ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDBallObjects1[k] = gdjs.Scene1Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDBallObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene1Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallCount"), gdjs.Scene1Code.GDBallCountObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDBallCountObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallCountObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBallObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene1Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.Scene1Code.GDBackground2Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBackground1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBackground2Objects1[i].hide();
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene1Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.Scene1Code.GDBackground2Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBackground2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBackground1Objects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDBackground1Objects1.length = 0;
gdjs.Scene1Code.GDBackground1Objects2.length = 0;
gdjs.Scene1Code.GDBackground1Objects3.length = 0;
gdjs.Scene1Code.GDBackground2Objects1.length = 0;
gdjs.Scene1Code.GDBackground2Objects2.length = 0;
gdjs.Scene1Code.GDBackground2Objects3.length = 0;
gdjs.Scene1Code.GDBallObjects1.length = 0;
gdjs.Scene1Code.GDBallObjects2.length = 0;
gdjs.Scene1Code.GDBallObjects3.length = 0;
gdjs.Scene1Code.GDFlagObjects1.length = 0;
gdjs.Scene1Code.GDFlagObjects2.length = 0;
gdjs.Scene1Code.GDFlagObjects3.length = 0;
gdjs.Scene1Code.GDGround1Objects1.length = 0;
gdjs.Scene1Code.GDGround1Objects2.length = 0;
gdjs.Scene1Code.GDGround1Objects3.length = 0;
gdjs.Scene1Code.GDGroundBackground1Objects1.length = 0;
gdjs.Scene1Code.GDGroundBackground1Objects2.length = 0;
gdjs.Scene1Code.GDGroundBackground1Objects3.length = 0;
gdjs.Scene1Code.GDDarkBlurObjects1.length = 0;
gdjs.Scene1Code.GDDarkBlurObjects2.length = 0;
gdjs.Scene1Code.GDDarkBlurObjects3.length = 0;
gdjs.Scene1Code.GDMenuButtonObjects1.length = 0;
gdjs.Scene1Code.GDMenuButtonObjects2.length = 0;
gdjs.Scene1Code.GDMenuButtonObjects3.length = 0;
gdjs.Scene1Code.GDHiddenGround1Objects1.length = 0;
gdjs.Scene1Code.GDHiddenGround1Objects2.length = 0;
gdjs.Scene1Code.GDHiddenGround1Objects3.length = 0;
gdjs.Scene1Code.GDArrowObjects1.length = 0;
gdjs.Scene1Code.GDArrowObjects2.length = 0;
gdjs.Scene1Code.GDArrowObjects3.length = 0;
gdjs.Scene1Code.GDPoverCircleObjects1.length = 0;
gdjs.Scene1Code.GDPoverCircleObjects2.length = 0;
gdjs.Scene1Code.GDPoverCircleObjects3.length = 0;
gdjs.Scene1Code.GDBallCountObjects1.length = 0;
gdjs.Scene1Code.GDBallCountObjects2.length = 0;
gdjs.Scene1Code.GDBallCountObjects3.length = 0;
gdjs.Scene1Code.GDBallCountTextObjects1.length = 0;
gdjs.Scene1Code.GDBallCountTextObjects2.length = 0;
gdjs.Scene1Code.GDBallCountTextObjects3.length = 0;
gdjs.Scene1Code.GDBallCountWrapperObjects1.length = 0;
gdjs.Scene1Code.GDBallCountWrapperObjects2.length = 0;
gdjs.Scene1Code.GDBallCountWrapperObjects3.length = 0;
gdjs.Scene1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Scene1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Scene1Code.GDNewTiledSpriteObjects3.length = 0;

gdjs.Scene1Code.eventsList4(runtimeScene);
return;

}

gdjs['Scene1Code'] = gdjs.Scene1Code;

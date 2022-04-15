gdjs.Scene2Code = {};
gdjs.Scene2Code.GDBackground1Objects1= [];
gdjs.Scene2Code.GDBackground1Objects2= [];
gdjs.Scene2Code.GDBackground1Objects3= [];
gdjs.Scene2Code.GDBackground2Objects1= [];
gdjs.Scene2Code.GDBackground2Objects2= [];
gdjs.Scene2Code.GDBackground2Objects3= [];
gdjs.Scene2Code.GDBallObjects1= [];
gdjs.Scene2Code.GDBallObjects2= [];
gdjs.Scene2Code.GDBallObjects3= [];
gdjs.Scene2Code.GDFlagObjects1= [];
gdjs.Scene2Code.GDFlagObjects2= [];
gdjs.Scene2Code.GDFlagObjects3= [];
gdjs.Scene2Code.GDGround1Objects1= [];
gdjs.Scene2Code.GDGround1Objects2= [];
gdjs.Scene2Code.GDGround1Objects3= [];
gdjs.Scene2Code.GDGroundBackground1Objects1= [];
gdjs.Scene2Code.GDGroundBackground1Objects2= [];
gdjs.Scene2Code.GDGroundBackground1Objects3= [];
gdjs.Scene2Code.GDDarkBlurObjects1= [];
gdjs.Scene2Code.GDDarkBlurObjects2= [];
gdjs.Scene2Code.GDDarkBlurObjects3= [];
gdjs.Scene2Code.GDObstacleObjects1= [];
gdjs.Scene2Code.GDObstacleObjects2= [];
gdjs.Scene2Code.GDObstacleObjects3= [];

gdjs.Scene2Code.conditionTrue_0 = {val:false};
gdjs.Scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2Code.condition1IsTrue_0 = {val:false};
gdjs.Scene2Code.condition2IsTrue_0 = {val:false};
gdjs.Scene2Code.conditionTrue_1 = {val:false};
gdjs.Scene2Code.condition0IsTrue_1 = {val:false};
gdjs.Scene2Code.condition1IsTrue_1 = {val:false};
gdjs.Scene2Code.condition2IsTrue_1 = {val:false};


gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 33;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene2Code.GDBackground1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects2);
{for(var i = 0, len = gdjs.Scene2Code.GDBackground1Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBackground1Objects2[i].setXOffset(gdjs.Scene2Code.GDBackground1Objects2[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects2[i].rotate(50, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects2[i].rotate(50, runtimeScene);
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 33;
}if ( gdjs.Scene2Code.condition0IsTrue_1.val ) {
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 66;
}}
gdjs.Scene2Code.conditionTrue_1.val = true && gdjs.Scene2Code.condition0IsTrue_1.val && gdjs.Scene2Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene2Code.GDBackground1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects2);
{for(var i = 0, len = gdjs.Scene2Code.GDBackground1Objects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBackground1Objects2[i].setXOffset(gdjs.Scene2Code.GDBackground1Objects2[i].getXOffset() + (400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects2[i].rotate(70, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects2[i].rotate(70, runtimeScene);
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 66;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene2Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBackground1Objects1[i].setXOffset(gdjs.Scene2Code.GDBackground1Objects1[i].getXOffset() + (600 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects1[i].rotate(90, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects1[i].rotate(90, runtimeScene);
}
}}

}


};gdjs.Scene2Code.userFunc0x7e4948 = function(runtimeScene) {
"use strict";

const run = async () => {
  let url = 'https://api.kanye.rest/';
  let response = await fetch(url);

    const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let value = params.private_key || 'none';


  let commits = await response.json();
  const ballPosition = runtimeScene.getObjects("Ball")[0]

  runtimeScene.getVariables().get("ObstaclePosition").setNumber(ballPosition.getCenterYInScene() - 50)
  runtimeScene.getVariables().get("ShowObstacle").setNumber(1)


}

run()
};
gdjs.Scene2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Scene2Code.userFunc0x7e4948(runtimeScene);

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects1[i].hide();
}
}}

}


};gdjs.Scene2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= -(55);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects2);
{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects2[i].setY(200);
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < -(35);
}if ( gdjs.Scene2Code.condition0IsTrue_1.val ) {
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > -(55);
}}
gdjs.Scene2Code.conditionTrue_1.val = true && gdjs.Scene2Code.condition0IsTrue_1.val && gdjs.Scene2Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects2);
{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects2.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects2[i].setY(400);
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= -(35);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDBallObjects1[i].setY(600);
}
}}

}


};gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Scene2Code.GDBallObjects1});gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Scene2Code.GDObstacleObjects1});gdjs.Scene2Code.eventsList3 = function(runtimeScene) {

{



}


{


{

{ //Subevents
gdjs.Scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{ //Subevents
gdjs.Scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition0IsTrue_0;
gdjs.Scene2Code.condition0IsTrue_1.val = false;
gdjs.Scene2Code.condition1IsTrue_1.val = false;
{
gdjs.Scene2Code.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 3;
}if ( gdjs.Scene2Code.condition0IsTrue_1.val ) {
{
gdjs.Scene2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
gdjs.Scene2Code.conditionTrue_1.val = true && gdjs.Scene2Code.condition0IsTrue_1.val && gdjs.Scene2Code.condition1IsTrue_1.val;
}
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects1[i].addForceTowardPosition(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)), 500, 0);
}
}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Scene2Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDObstacleObjects1[i].hide(false);
}
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene2Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Scene2Code.GDObstacleObjects1);

gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDBallObjects1Objects, gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDObstacleObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EndTimer");
}}

}


{



}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EndTimer") > 1;
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition1IsTrue_0;
gdjs.Scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8346188);
}
}}
if (gdjs.Scene2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3", true);
}}

}


};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDBackground1Objects1.length = 0;
gdjs.Scene2Code.GDBackground1Objects2.length = 0;
gdjs.Scene2Code.GDBackground1Objects3.length = 0;
gdjs.Scene2Code.GDBackground2Objects1.length = 0;
gdjs.Scene2Code.GDBackground2Objects2.length = 0;
gdjs.Scene2Code.GDBackground2Objects3.length = 0;
gdjs.Scene2Code.GDBallObjects1.length = 0;
gdjs.Scene2Code.GDBallObjects2.length = 0;
gdjs.Scene2Code.GDBallObjects3.length = 0;
gdjs.Scene2Code.GDFlagObjects1.length = 0;
gdjs.Scene2Code.GDFlagObjects2.length = 0;
gdjs.Scene2Code.GDFlagObjects3.length = 0;
gdjs.Scene2Code.GDGround1Objects1.length = 0;
gdjs.Scene2Code.GDGround1Objects2.length = 0;
gdjs.Scene2Code.GDGround1Objects3.length = 0;
gdjs.Scene2Code.GDGroundBackground1Objects1.length = 0;
gdjs.Scene2Code.GDGroundBackground1Objects2.length = 0;
gdjs.Scene2Code.GDGroundBackground1Objects3.length = 0;
gdjs.Scene2Code.GDDarkBlurObjects1.length = 0;
gdjs.Scene2Code.GDDarkBlurObjects2.length = 0;
gdjs.Scene2Code.GDDarkBlurObjects3.length = 0;
gdjs.Scene2Code.GDObstacleObjects1.length = 0;
gdjs.Scene2Code.GDObstacleObjects2.length = 0;
gdjs.Scene2Code.GDObstacleObjects3.length = 0;

gdjs.Scene2Code.eventsList3(runtimeScene);
return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;

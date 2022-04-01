gdjs.Level_321Code = {};
gdjs.Level_321Code.GDSummerTileObjects1= [];
gdjs.Level_321Code.GDSummerTileObjects2= [];
gdjs.Level_321Code.GDSummerTileObjects3= [];
gdjs.Level_321Code.GDFallTreesBackgroundObjects1= [];
gdjs.Level_321Code.GDFallTreesBackgroundObjects2= [];
gdjs.Level_321Code.GDFallTreesBackgroundObjects3= [];
gdjs.Level_321Code.GDVolleyBall1Objects1= [];
gdjs.Level_321Code.GDVolleyBall1Objects2= [];
gdjs.Level_321Code.GDVolleyBall1Objects3= [];
gdjs.Level_321Code.GDGreenFlagObjects1= [];
gdjs.Level_321Code.GDGreenFlagObjects2= [];
gdjs.Level_321Code.GDGreenFlagObjects3= [];
gdjs.Level_321Code.GDBackButtonObjects1= [];
gdjs.Level_321Code.GDBackButtonObjects2= [];
gdjs.Level_321Code.GDBackButtonObjects3= [];
gdjs.Level_321Code.GDBallObjects1= [];
gdjs.Level_321Code.GDBallObjects2= [];
gdjs.Level_321Code.GDBallObjects3= [];
gdjs.Level_321Code.GDBigTree4Objects1= [];
gdjs.Level_321Code.GDBigTree4Objects2= [];
gdjs.Level_321Code.GDBigTree4Objects3= [];
gdjs.Level_321Code.GDWallForRedFloorObjects1= [];
gdjs.Level_321Code.GDWallForRedFloorObjects2= [];
gdjs.Level_321Code.GDWallForRedFloorObjects3= [];
gdjs.Level_321Code.GDGreenSubstanceFloorObjects1= [];
gdjs.Level_321Code.GDGreenSubstanceFloorObjects2= [];
gdjs.Level_321Code.GDGreenSubstanceFloorObjects3= [];
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects1= [];
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects2= [];
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects3= [];
gdjs.Level_321Code.GDFullArrowObjects1= [];
gdjs.Level_321Code.GDFullArrowObjects2= [];
gdjs.Level_321Code.GDFullArrowObjects3= [];
gdjs.Level_321Code.GDDistanceObjects1= [];
gdjs.Level_321Code.GDDistanceObjects2= [];
gdjs.Level_321Code.GDDistanceObjects3= [];
gdjs.Level_321Code.GDPoverLevelObjects1= [];
gdjs.Level_321Code.GDPoverLevelObjects2= [];
gdjs.Level_321Code.GDPoverLevelObjects3= [];
gdjs.Level_321Code.GDTimerTextObjects1= [];
gdjs.Level_321Code.GDTimerTextObjects2= [];
gdjs.Level_321Code.GDTimerTextObjects3= [];
gdjs.Level_321Code.GDFetchTextObjects1= [];
gdjs.Level_321Code.GDFetchTextObjects2= [];
gdjs.Level_321Code.GDFetchTextObjects3= [];
gdjs.Level_321Code.GDNewVideoObjects1= [];
gdjs.Level_321Code.GDNewVideoObjects2= [];
gdjs.Level_321Code.GDNewVideoObjects3= [];
gdjs.Level_321Code.GDCheckRoundButtonObjects1= [];
gdjs.Level_321Code.GDCheckRoundButtonObjects2= [];
gdjs.Level_321Code.GDCheckRoundButtonObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCheckRoundButtonObjects1Objects = Hashtable.newFrom({"CheckRoundButton": gdjs.Level_321Code.GDCheckRoundButtonObjects1});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8474892);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", true);
}}

}


};gdjs.Level_321Code.userFunc0x7963b8 = function(runtimeScene) {
"use strict";
const delay = time => new Promise(res=>setTimeout(res,time));

const run = async () => {
  let url = 'https://api.kanye.rest/';
  let response = await fetch(url);

    const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let value = params.private_key || 'none';


  // await delay(5000); 
  let commits = await response.json();
  const texts = runtimeScene.getObjects("FetchText")
  const videos = runtimeScene.getObjects("NewVideo")

  const text = texts[0]
  const video = videos[0]

  text.setVariableString(text, `Fetch Text: ${commits.quote}, Query params: ${value}`)
  video.hide(true)
}

run()
};
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level_321Code.userFunc0x7963b8(runtimeScene);

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8478308);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
/* Reuse gdjs.Level_321Code.GDFullArrowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Level_321Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].getBehavior("Physics2").applyImpulseTowardPosition(2, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), (gdjs.Level_321Code.GDBallObjects1[i].getCenterXInScene()), (gdjs.Level_321Code.GDBallObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFullArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFullArrowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewVideoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewVideoObjects1[i].play();
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 100);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - 1);
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", true);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", true);
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckRoundButton"), gdjs.Level_321Code.GDCheckRoundButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCheckRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Level_321Code.GDNewVideoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sec");
}{for(var i = 0, len = gdjs.Level_321Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewVideoObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("FullArrow"), gdjs.Level_321Code.GDFullArrowObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDFullArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFullArrowObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 500, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFullArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFullArrowObjects1[i].setPosition((( gdjs.Level_321Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDBallObjects1[0].getCenterXInScene()),(( gdjs.Level_321Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDBallObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullArrow"), gdjs.Level_321Code.GDFullArrowObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFullArrowObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFullArrowObjects1[i].isVisible() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFullArrowObjects1[k] = gdjs.Level_321Code.GDFullArrowObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFullArrowObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 1;
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Distance"), gdjs.Level_321Code.GDDistanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenFlag"), gdjs.Level_321Code.GDGreenFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("PoverLevel"), gdjs.Level_321Code.GDPoverLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolleyBall1"), gdjs.Level_321Code.GDVolleyBall1Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDistanceObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDistanceObjects1[i].setString("Distance: " + gdjs.evtTools.common.toString(Math.round((( gdjs.Level_321Code.GDVolleyBall1Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDVolleyBall1Objects1[0].getSqDistanceToObject((gdjs.Level_321Code.GDGreenFlagObjects1.length !== 0 ? gdjs.Level_321Code.GDGreenFlagObjects1[0] : null))) / 1000)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPoverLevelObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPoverLevelObjects1[i].setHeight(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 100);
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Sec") > 0.01;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Level_321Code.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTimerTextObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"))) + " \n " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time")));
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullArrow"), gdjs.Level_321Code.GDFullArrowObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFullArrowObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFullArrowObjects1[i].getAngle() > 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFullArrowObjects1[k] = gdjs.Level_321Code.GDFullArrowObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFullArrowObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFullArrowObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDFullArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFullArrowObjects1[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullArrow"), gdjs.Level_321Code.GDFullArrowObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFullArrowObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFullArrowObjects1[i].getAngle() < -(90) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFullArrowObjects1[k] = gdjs.Level_321Code.GDFullArrowObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFullArrowObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDFullArrowObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDFullArrowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFullArrowObjects1[i].setAngle(-(90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBallObjects1[i].getX() > 600 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDBallObjects1[k] = gdjs.Level_321Code.GDBallObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBallObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", true);
}
{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


{
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Level_321Code.GDBallObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBallObjects1[i].setAnimation(2);
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDSummerTileObjects1.length = 0;
gdjs.Level_321Code.GDSummerTileObjects2.length = 0;
gdjs.Level_321Code.GDSummerTileObjects3.length = 0;
gdjs.Level_321Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDFallTreesBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDVolleyBall1Objects1.length = 0;
gdjs.Level_321Code.GDVolleyBall1Objects2.length = 0;
gdjs.Level_321Code.GDVolleyBall1Objects3.length = 0;
gdjs.Level_321Code.GDGreenFlagObjects1.length = 0;
gdjs.Level_321Code.GDGreenFlagObjects2.length = 0;
gdjs.Level_321Code.GDGreenFlagObjects3.length = 0;
gdjs.Level_321Code.GDBackButtonObjects1.length = 0;
gdjs.Level_321Code.GDBackButtonObjects2.length = 0;
gdjs.Level_321Code.GDBackButtonObjects3.length = 0;
gdjs.Level_321Code.GDBallObjects1.length = 0;
gdjs.Level_321Code.GDBallObjects2.length = 0;
gdjs.Level_321Code.GDBallObjects3.length = 0;
gdjs.Level_321Code.GDBigTree4Objects1.length = 0;
gdjs.Level_321Code.GDBigTree4Objects2.length = 0;
gdjs.Level_321Code.GDBigTree4Objects3.length = 0;
gdjs.Level_321Code.GDWallForRedFloorObjects1.length = 0;
gdjs.Level_321Code.GDWallForRedFloorObjects2.length = 0;
gdjs.Level_321Code.GDWallForRedFloorObjects3.length = 0;
gdjs.Level_321Code.GDGreenSubstanceFloorObjects1.length = 0;
gdjs.Level_321Code.GDGreenSubstanceFloorObjects2.length = 0;
gdjs.Level_321Code.GDGreenSubstanceFloorObjects3.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDGrassAndTreeBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDFullArrowObjects1.length = 0;
gdjs.Level_321Code.GDFullArrowObjects2.length = 0;
gdjs.Level_321Code.GDFullArrowObjects3.length = 0;
gdjs.Level_321Code.GDDistanceObjects1.length = 0;
gdjs.Level_321Code.GDDistanceObjects2.length = 0;
gdjs.Level_321Code.GDDistanceObjects3.length = 0;
gdjs.Level_321Code.GDPoverLevelObjects1.length = 0;
gdjs.Level_321Code.GDPoverLevelObjects2.length = 0;
gdjs.Level_321Code.GDPoverLevelObjects3.length = 0;
gdjs.Level_321Code.GDTimerTextObjects1.length = 0;
gdjs.Level_321Code.GDTimerTextObjects2.length = 0;
gdjs.Level_321Code.GDTimerTextObjects3.length = 0;
gdjs.Level_321Code.GDFetchTextObjects1.length = 0;
gdjs.Level_321Code.GDFetchTextObjects2.length = 0;
gdjs.Level_321Code.GDFetchTextObjects3.length = 0;
gdjs.Level_321Code.GDNewVideoObjects1.length = 0;
gdjs.Level_321Code.GDNewVideoObjects2.length = 0;
gdjs.Level_321Code.GDNewVideoObjects3.length = 0;
gdjs.Level_321Code.GDCheckRoundButtonObjects1.length = 0;
gdjs.Level_321Code.GDCheckRoundButtonObjects2.length = 0;
gdjs.Level_321Code.GDCheckRoundButtonObjects3.length = 0;

gdjs.Level_321Code.eventsList6(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;

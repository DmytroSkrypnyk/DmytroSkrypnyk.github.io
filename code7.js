gdjs.SelectedLevelCode = {};
gdjs.SelectedLevelCode.GDSummerTileObjects1= [];
gdjs.SelectedLevelCode.GDSummerTileObjects2= [];
gdjs.SelectedLevelCode.GDSummerTileObjects3= [];
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects1= [];
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects2= [];
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects3= [];
gdjs.SelectedLevelCode.GDVolleyBall1Objects1= [];
gdjs.SelectedLevelCode.GDVolleyBall1Objects2= [];
gdjs.SelectedLevelCode.GDVolleyBall1Objects3= [];
gdjs.SelectedLevelCode.GDGreenFlagObjects1= [];
gdjs.SelectedLevelCode.GDGreenFlagObjects2= [];
gdjs.SelectedLevelCode.GDGreenFlagObjects3= [];
gdjs.SelectedLevelCode.GDBackButtonObjects1= [];
gdjs.SelectedLevelCode.GDBackButtonObjects2= [];
gdjs.SelectedLevelCode.GDBackButtonObjects3= [];
gdjs.SelectedLevelCode.GDBallObjects1= [];
gdjs.SelectedLevelCode.GDBallObjects2= [];
gdjs.SelectedLevelCode.GDBallObjects3= [];
gdjs.SelectedLevelCode.GDBallTwoObjects1= [];
gdjs.SelectedLevelCode.GDBallTwoObjects2= [];
gdjs.SelectedLevelCode.GDBallTwoObjects3= [];
gdjs.SelectedLevelCode.GDBallThreeObjects1= [];
gdjs.SelectedLevelCode.GDBallThreeObjects2= [];
gdjs.SelectedLevelCode.GDBallThreeObjects3= [];
gdjs.SelectedLevelCode.GDBackButtonObjects1= [];
gdjs.SelectedLevelCode.GDBackButtonObjects2= [];
gdjs.SelectedLevelCode.GDBackButtonObjects3= [];

gdjs.SelectedLevelCode.conditionTrue_0 = {val:false};
gdjs.SelectedLevelCode.condition0IsTrue_0 = {val:false};
gdjs.SelectedLevelCode.condition1IsTrue_0 = {val:false};
gdjs.SelectedLevelCode.condition2IsTrue_0 = {val:false};
gdjs.SelectedLevelCode.conditionTrue_1 = {val:false};
gdjs.SelectedLevelCode.condition0IsTrue_1 = {val:false};
gdjs.SelectedLevelCode.condition1IsTrue_1 = {val:false};
gdjs.SelectedLevelCode.condition2IsTrue_1 = {val:false};


gdjs.SelectedLevelCode.eventsList0 = function(runtimeScene) {

{


gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.SelectedLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SelectedLevelCode.GDBallObjects1, gdjs.SelectedLevelCode.GDBallObjects2);

{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallObjects2[i].hide(false);
}
}}

}


{


gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.SelectedLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SelectedLevelCode.GDBallTwoObjects1, gdjs.SelectedLevelCode.GDBallTwoObjects2);

{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallTwoObjects2.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallTwoObjects2[i].hide(false);
}
}}

}


{


gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.SelectedLevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SelectedLevelCode.GDBallThreeObjects1 */
{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallThreeObjects1.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallThreeObjects1[i].hide(false);
}
}}

}


};gdjs.SelectedLevelCode.mapOfGDgdjs_46SelectedLevelCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.SelectedLevelCode.GDBackButtonObjects1});gdjs.SelectedLevelCode.eventsList1 = function(runtimeScene) {

{


gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
gdjs.SelectedLevelCode.condition1IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SelectedLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.SelectedLevelCode.conditionTrue_1 = gdjs.SelectedLevelCode.condition1IsTrue_0;
gdjs.SelectedLevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8502972);
}
}}
if (gdjs.SelectedLevelCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SelectLevel", true);
}}

}


};gdjs.SelectedLevelCode.eventsList2 = function(runtimeScene) {

{


gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SelectedLevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.SelectedLevelCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallThree"), gdjs.SelectedLevelCode.GDBallThreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallTwo"), gdjs.SelectedLevelCode.GDBallTwoObjects1);
{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallTwoObjects1.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallTwoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelectedLevelCode.GDBallThreeObjects1.length ;i < len;++i) {
    gdjs.SelectedLevelCode.GDBallThreeObjects1[i].hide();
}
}
{ //Subevents
gdjs.SelectedLevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SelectedLevelCode.GDBackButtonObjects1);

gdjs.SelectedLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectedLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectedLevelCode.mapOfGDgdjs_46SelectedLevelCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelectedLevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SelectedLevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SelectedLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectedLevelCode.GDSummerTileObjects1.length = 0;
gdjs.SelectedLevelCode.GDSummerTileObjects2.length = 0;
gdjs.SelectedLevelCode.GDSummerTileObjects3.length = 0;
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects1.length = 0;
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects2.length = 0;
gdjs.SelectedLevelCode.GDFallTreesBackgroundObjects3.length = 0;
gdjs.SelectedLevelCode.GDVolleyBall1Objects1.length = 0;
gdjs.SelectedLevelCode.GDVolleyBall1Objects2.length = 0;
gdjs.SelectedLevelCode.GDVolleyBall1Objects3.length = 0;
gdjs.SelectedLevelCode.GDGreenFlagObjects1.length = 0;
gdjs.SelectedLevelCode.GDGreenFlagObjects2.length = 0;
gdjs.SelectedLevelCode.GDGreenFlagObjects3.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects1.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects2.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects3.length = 0;
gdjs.SelectedLevelCode.GDBallObjects1.length = 0;
gdjs.SelectedLevelCode.GDBallObjects2.length = 0;
gdjs.SelectedLevelCode.GDBallObjects3.length = 0;
gdjs.SelectedLevelCode.GDBallTwoObjects1.length = 0;
gdjs.SelectedLevelCode.GDBallTwoObjects2.length = 0;
gdjs.SelectedLevelCode.GDBallTwoObjects3.length = 0;
gdjs.SelectedLevelCode.GDBallThreeObjects1.length = 0;
gdjs.SelectedLevelCode.GDBallThreeObjects2.length = 0;
gdjs.SelectedLevelCode.GDBallThreeObjects3.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects1.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects2.length = 0;
gdjs.SelectedLevelCode.GDBackButtonObjects3.length = 0;

gdjs.SelectedLevelCode.eventsList2(runtimeScene);
return;

}

gdjs['SelectedLevelCode'] = gdjs.SelectedLevelCode;

gdjs.SelectLevelCode = {};
gdjs.SelectLevelCode.GDSummerTileObjects1= [];
gdjs.SelectLevelCode.GDSummerTileObjects2= [];
gdjs.SelectLevelCode.GDFallTreesBackgroundObjects1= [];
gdjs.SelectLevelCode.GDFallTreesBackgroundObjects2= [];
gdjs.SelectLevelCode.GDVolleyBall1Objects1= [];
gdjs.SelectLevelCode.GDVolleyBall1Objects2= [];
gdjs.SelectLevelCode.GDGreenFlagObjects1= [];
gdjs.SelectLevelCode.GDGreenFlagObjects2= [];
gdjs.SelectLevelCode.GDBackButtonObjects1= [];
gdjs.SelectLevelCode.GDBackButtonObjects2= [];
gdjs.SelectLevelCode.GDBallObjects1= [];
gdjs.SelectLevelCode.GDBallObjects2= [];
gdjs.SelectLevelCode.GDSeaObjects1= [];
gdjs.SelectLevelCode.GDSeaObjects2= [];
gdjs.SelectLevelCode.GDYellowBackgroundObjects1= [];
gdjs.SelectLevelCode.GDYellowBackgroundObjects2= [];
gdjs.SelectLevelCode.GDLevelThreeObjects1= [];
gdjs.SelectLevelCode.GDLevelThreeObjects2= [];
gdjs.SelectLevelCode.GDLevelTwoObjects1= [];
gdjs.SelectLevelCode.GDLevelTwoObjects2= [];
gdjs.SelectLevelCode.GDLevelOneObjects1= [];
gdjs.SelectLevelCode.GDLevelOneObjects2= [];
gdjs.SelectLevelCode.GDLevel3Objects1= [];
gdjs.SelectLevelCode.GDLevel3Objects2= [];
gdjs.SelectLevelCode.GDNewText2Objects1= [];
gdjs.SelectLevelCode.GDNewText2Objects2= [];
gdjs.SelectLevelCode.GDLevel2Objects1= [];
gdjs.SelectLevelCode.GDLevel2Objects2= [];
gdjs.SelectLevelCode.GDLevel1Objects1= [];
gdjs.SelectLevelCode.GDLevel1Objects2= [];

gdjs.SelectLevelCode.conditionTrue_0 = {val:false};
gdjs.SelectLevelCode.condition0IsTrue_0 = {val:false};
gdjs.SelectLevelCode.condition1IsTrue_0 = {val:false};
gdjs.SelectLevelCode.condition2IsTrue_0 = {val:false};
gdjs.SelectLevelCode.conditionTrue_1 = {val:false};
gdjs.SelectLevelCode.condition0IsTrue_1 = {val:false};
gdjs.SelectLevelCode.condition1IsTrue_1 = {val:false};
gdjs.SelectLevelCode.condition2IsTrue_1 = {val:false};


gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelOneObjects1Objects = Hashtable.newFrom({"LevelOne": gdjs.SelectLevelCode.GDLevelOneObjects1});gdjs.SelectLevelCode.eventsList0 = function(runtimeScene) {

{


gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
gdjs.SelectLevelCode.condition1IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SelectLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.SelectLevelCode.conditionTrue_1 = gdjs.SelectLevelCode.condition1IsTrue_0;
gdjs.SelectLevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8565580);
}
}}
if (gdjs.SelectLevelCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelTwoObjects1Objects = Hashtable.newFrom({"LevelTwo": gdjs.SelectLevelCode.GDLevelTwoObjects1});gdjs.SelectLevelCode.eventsList1 = function(runtimeScene) {

{


gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
gdjs.SelectLevelCode.condition1IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SelectLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.SelectLevelCode.conditionTrue_1 = gdjs.SelectLevelCode.condition1IsTrue_0;
gdjs.SelectLevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8563012);
}
}}
if (gdjs.SelectLevelCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelThreeObjects1Objects = Hashtable.newFrom({"LevelThree": gdjs.SelectLevelCode.GDLevelThreeObjects1});gdjs.SelectLevelCode.eventsList2 = function(runtimeScene) {

{


gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
gdjs.SelectLevelCode.condition1IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SelectLevelCode.condition0IsTrue_0.val ) {
{
{gdjs.SelectLevelCode.conditionTrue_1 = gdjs.SelectLevelCode.condition1IsTrue_0;
gdjs.SelectLevelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8538340);
}
}}
if (gdjs.SelectLevelCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


};gdjs.SelectLevelCode.eventsList3 = function(runtimeScene) {

{


gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SelectLevelCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelOne"), gdjs.SelectLevelCode.GDLevelOneObjects1);

gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelOneObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelectLevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SelectLevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelTwo"), gdjs.SelectLevelCode.GDLevelTwoObjects1);

gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelTwoObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelectLevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SelectLevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelThree"), gdjs.SelectLevelCode.GDLevelThreeObjects1);

gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelectLevelCode.mapOfGDgdjs_46SelectLevelCode_46GDLevelThreeObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelectLevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SelectLevelCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.SelectLevelCode.condition0IsTrue_0.val = false;
{
gdjs.SelectLevelCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 0;
}if (gdjs.SelectLevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};

gdjs.SelectLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectLevelCode.GDSummerTileObjects1.length = 0;
gdjs.SelectLevelCode.GDSummerTileObjects2.length = 0;
gdjs.SelectLevelCode.GDFallTreesBackgroundObjects1.length = 0;
gdjs.SelectLevelCode.GDFallTreesBackgroundObjects2.length = 0;
gdjs.SelectLevelCode.GDVolleyBall1Objects1.length = 0;
gdjs.SelectLevelCode.GDVolleyBall1Objects2.length = 0;
gdjs.SelectLevelCode.GDGreenFlagObjects1.length = 0;
gdjs.SelectLevelCode.GDGreenFlagObjects2.length = 0;
gdjs.SelectLevelCode.GDBackButtonObjects1.length = 0;
gdjs.SelectLevelCode.GDBackButtonObjects2.length = 0;
gdjs.SelectLevelCode.GDBallObjects1.length = 0;
gdjs.SelectLevelCode.GDBallObjects2.length = 0;
gdjs.SelectLevelCode.GDSeaObjects1.length = 0;
gdjs.SelectLevelCode.GDSeaObjects2.length = 0;
gdjs.SelectLevelCode.GDYellowBackgroundObjects1.length = 0;
gdjs.SelectLevelCode.GDYellowBackgroundObjects2.length = 0;
gdjs.SelectLevelCode.GDLevelThreeObjects1.length = 0;
gdjs.SelectLevelCode.GDLevelThreeObjects2.length = 0;
gdjs.SelectLevelCode.GDLevelTwoObjects1.length = 0;
gdjs.SelectLevelCode.GDLevelTwoObjects2.length = 0;
gdjs.SelectLevelCode.GDLevelOneObjects1.length = 0;
gdjs.SelectLevelCode.GDLevelOneObjects2.length = 0;
gdjs.SelectLevelCode.GDLevel3Objects1.length = 0;
gdjs.SelectLevelCode.GDLevel3Objects2.length = 0;
gdjs.SelectLevelCode.GDNewText2Objects1.length = 0;
gdjs.SelectLevelCode.GDNewText2Objects2.length = 0;
gdjs.SelectLevelCode.GDLevel2Objects1.length = 0;
gdjs.SelectLevelCode.GDLevel2Objects2.length = 0;
gdjs.SelectLevelCode.GDLevel1Objects1.length = 0;
gdjs.SelectLevelCode.GDLevel1Objects2.length = 0;

gdjs.SelectLevelCode.eventsList3(runtimeScene);
return;

}

gdjs['SelectLevelCode'] = gdjs.SelectLevelCode;

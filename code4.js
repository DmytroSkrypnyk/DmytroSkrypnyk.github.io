gdjs.Faile_32sceneCode = {};
gdjs.Faile_32sceneCode.GDSummerTileObjects1= [];
gdjs.Faile_32sceneCode.GDSummerTileObjects2= [];
gdjs.Faile_32sceneCode.GDFallTreesBackgroundObjects1= [];
gdjs.Faile_32sceneCode.GDFallTreesBackgroundObjects2= [];
gdjs.Faile_32sceneCode.GDVolleyBall1Objects1= [];
gdjs.Faile_32sceneCode.GDVolleyBall1Objects2= [];
gdjs.Faile_32sceneCode.GDGreenFlagObjects1= [];
gdjs.Faile_32sceneCode.GDGreenFlagObjects2= [];
gdjs.Faile_32sceneCode.GDBackButtonObjects1= [];
gdjs.Faile_32sceneCode.GDBackButtonObjects2= [];
gdjs.Faile_32sceneCode.GDBallObjects1= [];
gdjs.Faile_32sceneCode.GDBallObjects2= [];

gdjs.Faile_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Faile_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Faile_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Faile_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Faile_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Faile_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Faile_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Faile_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Faile_32sceneCode.mapOfGDgdjs_46Faile_9532sceneCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Faile_32sceneCode.GDBackButtonObjects1});gdjs.Faile_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Faile_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Faile_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Faile_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Faile_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Faile_32sceneCode.conditionTrue_1 = gdjs.Faile_32sceneCode.condition1IsTrue_0;
gdjs.Faile_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8551292);
}
}}
if (gdjs.Faile_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SelectLevel", true);
}}

}


};gdjs.Faile_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Faile_32sceneCode.GDBackButtonObjects1);

gdjs.Faile_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Faile_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Faile_32sceneCode.mapOfGDgdjs_46Faile_9532sceneCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Faile_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Faile_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Faile_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Faile_32sceneCode.GDSummerTileObjects1.length = 0;
gdjs.Faile_32sceneCode.GDSummerTileObjects2.length = 0;
gdjs.Faile_32sceneCode.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Faile_32sceneCode.GDFallTreesBackgroundObjects2.length = 0;
gdjs.Faile_32sceneCode.GDVolleyBall1Objects1.length = 0;
gdjs.Faile_32sceneCode.GDVolleyBall1Objects2.length = 0;
gdjs.Faile_32sceneCode.GDGreenFlagObjects1.length = 0;
gdjs.Faile_32sceneCode.GDGreenFlagObjects2.length = 0;
gdjs.Faile_32sceneCode.GDBackButtonObjects1.length = 0;
gdjs.Faile_32sceneCode.GDBackButtonObjects2.length = 0;
gdjs.Faile_32sceneCode.GDBallObjects1.length = 0;
gdjs.Faile_32sceneCode.GDBallObjects2.length = 0;

gdjs.Faile_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Faile_32sceneCode'] = gdjs.Faile_32sceneCode;

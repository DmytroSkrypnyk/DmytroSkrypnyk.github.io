gdjs.Success_32endCode = {};
gdjs.Success_32endCode.GDSummerTileObjects1= [];
gdjs.Success_32endCode.GDSummerTileObjects2= [];
gdjs.Success_32endCode.GDFallTreesBackgroundObjects1= [];
gdjs.Success_32endCode.GDFallTreesBackgroundObjects2= [];
gdjs.Success_32endCode.GDVolleyBall1Objects1= [];
gdjs.Success_32endCode.GDVolleyBall1Objects2= [];
gdjs.Success_32endCode.GDGreenFlagObjects1= [];
gdjs.Success_32endCode.GDGreenFlagObjects2= [];
gdjs.Success_32endCode.GDBackButtonObjects1= [];
gdjs.Success_32endCode.GDBackButtonObjects2= [];
gdjs.Success_32endCode.GDBallObjects1= [];
gdjs.Success_32endCode.GDBallObjects2= [];

gdjs.Success_32endCode.conditionTrue_0 = {val:false};
gdjs.Success_32endCode.condition0IsTrue_0 = {val:false};
gdjs.Success_32endCode.condition1IsTrue_0 = {val:false};
gdjs.Success_32endCode.condition2IsTrue_0 = {val:false};
gdjs.Success_32endCode.conditionTrue_1 = {val:false};
gdjs.Success_32endCode.condition0IsTrue_1 = {val:false};
gdjs.Success_32endCode.condition1IsTrue_1 = {val:false};
gdjs.Success_32endCode.condition2IsTrue_1 = {val:false};


gdjs.Success_32endCode.mapOfGDgdjs_46Success_9532endCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Success_32endCode.GDBackButtonObjects1});gdjs.Success_32endCode.eventsList0 = function(runtimeScene) {

{


gdjs.Success_32endCode.condition0IsTrue_0.val = false;
gdjs.Success_32endCode.condition1IsTrue_0.val = false;
{
gdjs.Success_32endCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Success_32endCode.condition0IsTrue_0.val ) {
{
{gdjs.Success_32endCode.conditionTrue_1 = gdjs.Success_32endCode.condition1IsTrue_0;
gdjs.Success_32endCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8558132);
}
}}
if (gdjs.Success_32endCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SelectLevel", true);
}}

}


};gdjs.Success_32endCode.eventsList1 = function(runtimeScene) {

{


gdjs.Success_32endCode.condition0IsTrue_0.val = false;
{
{gdjs.Success_32endCode.conditionTrue_1 = gdjs.Success_32endCode.condition0IsTrue_0;
gdjs.Success_32endCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8556244);
}
}if (gdjs.Success_32endCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Success_32endCode.GDBallObjects1);
{for(var i = 0, len = gdjs.Success_32endCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Success_32endCode.GDBallObjects1[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 1.9, 600, 300, (gdjs.Success_32endCode.GDBallObjects1[i].getCenterXInScene()), (gdjs.Success_32endCode.GDBallObjects1[i].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Success_32endCode.GDBackButtonObjects1);

gdjs.Success_32endCode.condition0IsTrue_0.val = false;
{
gdjs.Success_32endCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Success_32endCode.mapOfGDgdjs_46Success_9532endCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Success_32endCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Success_32endCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Success_32endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Success_32endCode.GDSummerTileObjects1.length = 0;
gdjs.Success_32endCode.GDSummerTileObjects2.length = 0;
gdjs.Success_32endCode.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Success_32endCode.GDFallTreesBackgroundObjects2.length = 0;
gdjs.Success_32endCode.GDVolleyBall1Objects1.length = 0;
gdjs.Success_32endCode.GDVolleyBall1Objects2.length = 0;
gdjs.Success_32endCode.GDGreenFlagObjects1.length = 0;
gdjs.Success_32endCode.GDGreenFlagObjects2.length = 0;
gdjs.Success_32endCode.GDBackButtonObjects1.length = 0;
gdjs.Success_32endCode.GDBackButtonObjects2.length = 0;
gdjs.Success_32endCode.GDBallObjects1.length = 0;
gdjs.Success_32endCode.GDBallObjects2.length = 0;

gdjs.Success_32endCode.eventsList1(runtimeScene);
return;

}

gdjs['Success_32endCode'] = gdjs.Success_32endCode;

gdjs.Level_323Code = {};
gdjs.Level_323Code.GDSummerTileObjects1= [];
gdjs.Level_323Code.GDSummerTileObjects2= [];
gdjs.Level_323Code.GDFallTreesBackgroundObjects1= [];
gdjs.Level_323Code.GDFallTreesBackgroundObjects2= [];
gdjs.Level_323Code.GDVolleyBall1Objects1= [];
gdjs.Level_323Code.GDVolleyBall1Objects2= [];
gdjs.Level_323Code.GDGreenFlagObjects1= [];
gdjs.Level_323Code.GDGreenFlagObjects2= [];
gdjs.Level_323Code.GDBackButtonObjects1= [];
gdjs.Level_323Code.GDBackButtonObjects2= [];
gdjs.Level_323Code.GDBallObjects1= [];
gdjs.Level_323Code.GDBallObjects2= [];
gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1= [];
gdjs.Level_323Code.GDEmptyCloudBackgroundObjects2= [];
gdjs.Level_323Code.GDFullMoonObjects1= [];
gdjs.Level_323Code.GDFullMoonObjects2= [];
gdjs.Level_323Code.GDFlyingEnemyObjects1= [];
gdjs.Level_323Code.GDFlyingEnemyObjects2= [];

gdjs.Level_323Code.conditionTrue_0 = {val:false};
gdjs.Level_323Code.condition0IsTrue_0 = {val:false};
gdjs.Level_323Code.condition1IsTrue_0 = {val:false};


gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDFullMoonObjects1Objects = Hashtable.newFrom({"FullMoon": gdjs.Level_323Code.GDFullMoonObjects1});gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDFlyingEnemyObjects1Objects = Hashtable.newFrom({"FlyingEnemy": gdjs.Level_323Code.GDFlyingEnemyObjects1});gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Level_323Code.GDFlyingEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_323Code.GDFullMoonObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDFullMoonObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDFlyingEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDFullMoonObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDFullMoonObjects1[i].setVariableBoolean(gdjs.Level_323Code.GDFullMoonObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


};gdjs.Level_323Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("EmptyCloudBackground"), gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_323Code.GDFullMoonObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1[i].setXOffset(gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Level_323Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDFullMoonObjects1[i].rotate(90, runtimeScene);
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 10;
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 1;
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Level_323Code.GDFlyingEnemyObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDFlyingEnemyObjects1[i].addForceTowardPosition(900, 400, 300, 0);
}
}
{ //Subevents
gdjs.Level_323Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_323Code.GDFullMoonObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDFullMoonObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDFullMoonObjects1[i].getVariableBoolean(gdjs.Level_323Code.GDFullMoonObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDFullMoonObjects1[k] = gdjs.Level_323Code.GDFullMoonObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDFullMoonObjects1.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDFullMoonObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDFullMoonObjects1[i].addForceTowardPosition(800, 2000, 500, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_323Code.GDFullMoonObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_323Code.GDFullMoonObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDFullMoonObjects1[i].getY() > 1200 ) {
        gdjs.Level_323Code.condition0IsTrue_0.val = true;
        gdjs.Level_323Code.GDFullMoonObjects1[k] = gdjs.Level_323Code.GDFullMoonObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDFullMoonObjects1.length = k;}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Faile scene", true);
}}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDSummerTileObjects1.length = 0;
gdjs.Level_323Code.GDSummerTileObjects2.length = 0;
gdjs.Level_323Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Level_323Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs.Level_323Code.GDVolleyBall1Objects1.length = 0;
gdjs.Level_323Code.GDVolleyBall1Objects2.length = 0;
gdjs.Level_323Code.GDGreenFlagObjects1.length = 0;
gdjs.Level_323Code.GDGreenFlagObjects2.length = 0;
gdjs.Level_323Code.GDBackButtonObjects1.length = 0;
gdjs.Level_323Code.GDBackButtonObjects2.length = 0;
gdjs.Level_323Code.GDBallObjects1.length = 0;
gdjs.Level_323Code.GDBallObjects2.length = 0;
gdjs.Level_323Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Level_323Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Level_323Code.GDFullMoonObjects1.length = 0;
gdjs.Level_323Code.GDFullMoonObjects2.length = 0;
gdjs.Level_323Code.GDFlyingEnemyObjects1.length = 0;
gdjs.Level_323Code.GDFlyingEnemyObjects2.length = 0;

gdjs.Level_323Code.eventsList1(runtimeScene);
return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;

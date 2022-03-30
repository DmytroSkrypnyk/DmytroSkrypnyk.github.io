gdjs.Level_324Code = {};
gdjs.Level_324Code.GDSummerTileObjects1= [];
gdjs.Level_324Code.GDSummerTileObjects2= [];
gdjs.Level_324Code.GDFallTreesBackgroundObjects1= [];
gdjs.Level_324Code.GDFallTreesBackgroundObjects2= [];
gdjs.Level_324Code.GDVolleyBall1Objects1= [];
gdjs.Level_324Code.GDVolleyBall1Objects2= [];
gdjs.Level_324Code.GDGreenFlagObjects1= [];
gdjs.Level_324Code.GDGreenFlagObjects2= [];
gdjs.Level_324Code.GDBackButtonObjects1= [];
gdjs.Level_324Code.GDBackButtonObjects2= [];
gdjs.Level_324Code.GDBallObjects1= [];
gdjs.Level_324Code.GDBallObjects2= [];
gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1= [];
gdjs.Level_324Code.GDEmptyCloudBackgroundObjects2= [];
gdjs.Level_324Code.GDFullMoonObjects1= [];
gdjs.Level_324Code.GDFullMoonObjects2= [];
gdjs.Level_324Code.GDFlyingEnemyObjects1= [];
gdjs.Level_324Code.GDFlyingEnemyObjects2= [];

gdjs.Level_324Code.conditionTrue_0 = {val:false};
gdjs.Level_324Code.condition0IsTrue_0 = {val:false};
gdjs.Level_324Code.condition1IsTrue_0 = {val:false};


gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDFullMoonObjects1Objects = Hashtable.newFrom({"FullMoon": gdjs.Level_324Code.GDFullMoonObjects1});gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDFlyingEnemyObjects1Objects = Hashtable.newFrom({"FlyingEnemy": gdjs.Level_324Code.GDFlyingEnemyObjects1});gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Level_324Code.GDFlyingEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_324Code.GDFullMoonObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDFullMoonObjects1Objects, gdjs.Level_324Code.mapOfGDgdjs_46Level_95324Code_46GDFlyingEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_324Code.GDFullMoonObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDFullMoonObjects1[i].setVariableBoolean(gdjs.Level_324Code.GDFullMoonObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


};gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("EmptyCloudBackground"), gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_324Code.GDFullMoonObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1[i].setXOffset(gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Level_324Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDFullMoonObjects1[i].rotate(90, runtimeScene);
}
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 10;
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
gdjs.Level_324Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 1;
}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Level_324Code.GDFlyingEnemyObjects1);
{for(var i = 0, len = gdjs.Level_324Code.GDFlyingEnemyObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDFlyingEnemyObjects1[i].addForceTowardPosition(0, 800, 500, 0);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullMoon"), gdjs.Level_324Code.GDFullMoonObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_324Code.GDFullMoonObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDFullMoonObjects1[i].getVariableBoolean(gdjs.Level_324Code.GDFullMoonObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Level_324Code.condition0IsTrue_0.val = true;
        gdjs.Level_324Code.GDFullMoonObjects1[k] = gdjs.Level_324Code.GDFullMoonObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDFullMoonObjects1.length = k;}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_324Code.GDFullMoonObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDFullMoonObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDFullMoonObjects1[i].addForceTowardPosition(800, 2000, 300, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy"), gdjs.Level_324Code.GDFlyingEnemyObjects1);

gdjs.Level_324Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_324Code.GDFlyingEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDFlyingEnemyObjects1[i].getX() < 200 ) {
        gdjs.Level_324Code.condition0IsTrue_0.val = true;
        gdjs.Level_324Code.GDFlyingEnemyObjects1[k] = gdjs.Level_324Code.GDFlyingEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDFlyingEnemyObjects1.length = k;}if (gdjs.Level_324Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Success end", true);
}}

}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDSummerTileObjects1.length = 0;
gdjs.Level_324Code.GDSummerTileObjects2.length = 0;
gdjs.Level_324Code.GDFallTreesBackgroundObjects1.length = 0;
gdjs.Level_324Code.GDFallTreesBackgroundObjects2.length = 0;
gdjs.Level_324Code.GDVolleyBall1Objects1.length = 0;
gdjs.Level_324Code.GDVolleyBall1Objects2.length = 0;
gdjs.Level_324Code.GDGreenFlagObjects1.length = 0;
gdjs.Level_324Code.GDGreenFlagObjects2.length = 0;
gdjs.Level_324Code.GDBackButtonObjects1.length = 0;
gdjs.Level_324Code.GDBackButtonObjects2.length = 0;
gdjs.Level_324Code.GDBallObjects1.length = 0;
gdjs.Level_324Code.GDBallObjects2.length = 0;
gdjs.Level_324Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Level_324Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Level_324Code.GDFullMoonObjects1.length = 0;
gdjs.Level_324Code.GDFullMoonObjects2.length = 0;
gdjs.Level_324Code.GDFlyingEnemyObjects1.length = 0;
gdjs.Level_324Code.GDFlyingEnemyObjects2.length = 0;

gdjs.Level_324Code.eventsList1(runtimeScene);
return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;

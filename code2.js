gdjs.Scene3Code = {};
gdjs.Scene3Code.GDBackground1Objects1= [];
gdjs.Scene3Code.GDBackground1Objects2= [];
gdjs.Scene3Code.GDBackground1Objects3= [];
gdjs.Scene3Code.GDBackground2Objects1= [];
gdjs.Scene3Code.GDBackground2Objects2= [];
gdjs.Scene3Code.GDBackground2Objects3= [];
gdjs.Scene3Code.GDBallObjects1= [];
gdjs.Scene3Code.GDBallObjects2= [];
gdjs.Scene3Code.GDBallObjects3= [];
gdjs.Scene3Code.GDFlagObjects1= [];
gdjs.Scene3Code.GDFlagObjects2= [];
gdjs.Scene3Code.GDFlagObjects3= [];
gdjs.Scene3Code.GDGround1Objects1= [];
gdjs.Scene3Code.GDGround1Objects2= [];
gdjs.Scene3Code.GDGround1Objects3= [];
gdjs.Scene3Code.GDGroundBackground1Objects1= [];
gdjs.Scene3Code.GDGroundBackground1Objects2= [];
gdjs.Scene3Code.GDGroundBackground1Objects3= [];
gdjs.Scene3Code.GDDarkBlurObjects1= [];
gdjs.Scene3Code.GDDarkBlurObjects2= [];
gdjs.Scene3Code.GDDarkBlurObjects3= [];
gdjs.Scene3Code.GDEndBackgroundObjects1= [];
gdjs.Scene3Code.GDEndBackgroundObjects2= [];
gdjs.Scene3Code.GDEndBackgroundObjects3= [];
gdjs.Scene3Code.GDWinTextObjects1= [];
gdjs.Scene3Code.GDWinTextObjects2= [];
gdjs.Scene3Code.GDWinTextObjects3= [];
gdjs.Scene3Code.GDWinImageObjects1= [];
gdjs.Scene3Code.GDWinImageObjects2= [];
gdjs.Scene3Code.GDWinImageObjects3= [];
gdjs.Scene3Code.GDBallsButtonObjects1= [];
gdjs.Scene3Code.GDBallsButtonObjects2= [];
gdjs.Scene3Code.GDBallsButtonObjects3= [];
gdjs.Scene3Code.GDLevelsButtonObjects1= [];
gdjs.Scene3Code.GDLevelsButtonObjects2= [];
gdjs.Scene3Code.GDLevelsButtonObjects3= [];
gdjs.Scene3Code.GDPlayObjects1= [];
gdjs.Scene3Code.GDPlayObjects2= [];
gdjs.Scene3Code.GDPlayObjects3= [];
gdjs.Scene3Code.GDReplayObjects1= [];
gdjs.Scene3Code.GDReplayObjects2= [];
gdjs.Scene3Code.GDReplayObjects3= [];
gdjs.Scene3Code.GDLoseObjects1= [];
gdjs.Scene3Code.GDLoseObjects2= [];
gdjs.Scene3Code.GDLoseObjects3= [];

gdjs.Scene3Code.conditionTrue_0 = {val:false};
gdjs.Scene3Code.condition0IsTrue_0 = {val:false};
gdjs.Scene3Code.condition1IsTrue_0 = {val:false};
gdjs.Scene3Code.condition2IsTrue_0 = {val:false};
gdjs.Scene3Code.conditionTrue_1 = {val:false};
gdjs.Scene3Code.condition0IsTrue_1 = {val:false};
gdjs.Scene3Code.condition1IsTrue_1 = {val:false};
gdjs.Scene3Code.condition2IsTrue_1 = {val:false};


gdjs.Scene3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 5;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WinImage"), gdjs.Scene3Code.GDWinImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Scene3Code.GDWinTextObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDWinImageObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinImageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinTextObjects1[i].setString("You lose");
}
}}

}


};gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Scene3Code.GDBallObjects1});gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDGround1Objects1Objects = Hashtable.newFrom({"Ground1": gdjs.Scene3Code.GDGround1Objects1});gdjs.Scene3Code.eventsList1 = function(runtimeScene) {

{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 5;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lose"), gdjs.Scene3Code.GDLoseObjects2);
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.Scene3Code.GDReplayObjects2);
{for(var i = 0, len = gdjs.Scene3Code.GDLoseObjects2.length ;i < len;++i) {
    gdjs.Scene3Code.GDLoseObjects2[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Scene3Code.GDLoseObjects2.length ;i < len;++i) {
    gdjs.Scene3Code.GDLoseObjects2[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Scene3Code.GDReplayObjects2.length ;i < len;++i) {
    gdjs.Scene3Code.GDReplayObjects2[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.Scene3Code.GDReplayObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDReplayObjects2.length ;i < len;++i) {
    gdjs.Scene3Code.GDReplayObjects2[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.Scene3Code.GDReplayObjects2[i].getHeight()) - 100);
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Scene3Code.GDPlayObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDPlayObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.Scene3Code.GDPlayObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDPlayObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.Scene3Code.GDPlayObjects1[i].getHeight()) - 100);
}
}}

}


};gdjs.Scene3Code.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene3Code.GDBallObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Scene3Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene3Code.GDBallObjects1[0].getPointX("")), 0.5), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Scene3Code.GDBallObjects1.length === 0 ) ? 0 :gdjs.Scene3Code.GDBallObjects1[0].getPointY("")) - 350, 0.5), "", 0);
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition0IsTrue_0;
gdjs.Scene3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7274212);
}
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene3Code.GDBallObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBallObjects1[i].getBehavior("Physics2").applyImpulseTowardPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), 1800, 1200, (gdjs.Scene3Code.GDBallObjects1[i].getCenterXInScene()), (gdjs.Scene3Code.GDBallObjects1[i].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene3Code.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground1"), gdjs.Scene3Code.GDGround1Objects1);

gdjs.Scene3Code.condition0IsTrue_0.val = false;
gdjs.Scene3Code.condition1IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDBallObjects1Objects, gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDGround1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene3Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene3Code.conditionTrue_1 = gdjs.Scene3Code.condition1IsTrue_0;
gdjs.Scene3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8158700);
}
}}
if (gdjs.Scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 1;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BallsButton"), gdjs.Scene3Code.GDBallsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("EndBackground"), gdjs.Scene3Code.GDEndBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelsButton"), gdjs.Scene3Code.GDLevelsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinImage"), gdjs.Scene3Code.GDWinImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinText"), gdjs.Scene3Code.GDWinTextObjects1);
{for(var i = 0, len = gdjs.Scene3Code.GDEndBackgroundObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDEndBackgroundObjects1[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinTextObjects1[i].setZOrder(101);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinImageObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinImageObjects1[i].setZOrder(101);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ExitTimer");
}{for(var i = 0, len = gdjs.Scene3Code.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinTextObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.Scene3Code.GDWinTextObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinImageObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinImageObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.Scene3Code.GDWinImageObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinImageObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinImageObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.Scene3Code.GDWinImageObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDWinTextObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 400);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBallsButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBallsButtonObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.Scene3Code.GDBallsButtonObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBallsButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBallsButtonObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 15);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDLevelsButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDLevelsButtonObjects1[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.Scene3Code.GDLevelsButtonObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDLevelsButtonObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDLevelsButtonObjects1[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.Scene3Code.GDLevelsButtonObjects1[i].getWidth()) - 15);
}
}
{ //Subevents
gdjs.Scene3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Scene3Code.GDBallObjects1);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Scene3Code.GDBallObjects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBallObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene3Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.Scene3Code.GDBackground2Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBackground1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBackground2Objects1[i].hide();
}
}}

}


{


gdjs.Scene3Code.condition0IsTrue_0.val = false;
{
gdjs.Scene3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Scene3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.Scene3Code.GDBackground1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Background2"), gdjs.Scene3Code.GDBackground2Objects1);
{for(var i = 0, len = gdjs.Scene3Code.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBackground2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene3Code.GDBackground1Objects1.length ;i < len;++i) {
    gdjs.Scene3Code.GDBackground1Objects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene3Code.GDBackground1Objects1.length = 0;
gdjs.Scene3Code.GDBackground1Objects2.length = 0;
gdjs.Scene3Code.GDBackground1Objects3.length = 0;
gdjs.Scene3Code.GDBackground2Objects1.length = 0;
gdjs.Scene3Code.GDBackground2Objects2.length = 0;
gdjs.Scene3Code.GDBackground2Objects3.length = 0;
gdjs.Scene3Code.GDBallObjects1.length = 0;
gdjs.Scene3Code.GDBallObjects2.length = 0;
gdjs.Scene3Code.GDBallObjects3.length = 0;
gdjs.Scene3Code.GDFlagObjects1.length = 0;
gdjs.Scene3Code.GDFlagObjects2.length = 0;
gdjs.Scene3Code.GDFlagObjects3.length = 0;
gdjs.Scene3Code.GDGround1Objects1.length = 0;
gdjs.Scene3Code.GDGround1Objects2.length = 0;
gdjs.Scene3Code.GDGround1Objects3.length = 0;
gdjs.Scene3Code.GDGroundBackground1Objects1.length = 0;
gdjs.Scene3Code.GDGroundBackground1Objects2.length = 0;
gdjs.Scene3Code.GDGroundBackground1Objects3.length = 0;
gdjs.Scene3Code.GDDarkBlurObjects1.length = 0;
gdjs.Scene3Code.GDDarkBlurObjects2.length = 0;
gdjs.Scene3Code.GDDarkBlurObjects3.length = 0;
gdjs.Scene3Code.GDEndBackgroundObjects1.length = 0;
gdjs.Scene3Code.GDEndBackgroundObjects2.length = 0;
gdjs.Scene3Code.GDEndBackgroundObjects3.length = 0;
gdjs.Scene3Code.GDWinTextObjects1.length = 0;
gdjs.Scene3Code.GDWinTextObjects2.length = 0;
gdjs.Scene3Code.GDWinTextObjects3.length = 0;
gdjs.Scene3Code.GDWinImageObjects1.length = 0;
gdjs.Scene3Code.GDWinImageObjects2.length = 0;
gdjs.Scene3Code.GDWinImageObjects3.length = 0;
gdjs.Scene3Code.GDBallsButtonObjects1.length = 0;
gdjs.Scene3Code.GDBallsButtonObjects2.length = 0;
gdjs.Scene3Code.GDBallsButtonObjects3.length = 0;
gdjs.Scene3Code.GDLevelsButtonObjects1.length = 0;
gdjs.Scene3Code.GDLevelsButtonObjects2.length = 0;
gdjs.Scene3Code.GDLevelsButtonObjects3.length = 0;
gdjs.Scene3Code.GDPlayObjects1.length = 0;
gdjs.Scene3Code.GDPlayObjects2.length = 0;
gdjs.Scene3Code.GDPlayObjects3.length = 0;
gdjs.Scene3Code.GDReplayObjects1.length = 0;
gdjs.Scene3Code.GDReplayObjects2.length = 0;
gdjs.Scene3Code.GDReplayObjects3.length = 0;
gdjs.Scene3Code.GDLoseObjects1.length = 0;
gdjs.Scene3Code.GDLoseObjects2.length = 0;
gdjs.Scene3Code.GDLoseObjects3.length = 0;

gdjs.Scene3Code.eventsList2(runtimeScene);
return;

}

gdjs['Scene3Code'] = gdjs.Scene3Code;

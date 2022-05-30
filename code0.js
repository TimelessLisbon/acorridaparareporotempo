gdjs.lobbyCode = {};
gdjs.lobbyCode.GDfundoObjects1= [];
gdjs.lobbyCode.GDfundoObjects2= [];
gdjs.lobbyCode.GDentrarObjects1= [];
gdjs.lobbyCode.GDentrarObjects2= [];
gdjs.lobbyCode.GDcriarObjects1= [];
gdjs.lobbyCode.GDcriarObjects2= [];

gdjs.lobbyCode.conditionTrue_0 = {val:false};
gdjs.lobbyCode.condition0IsTrue_0 = {val:false};
gdjs.lobbyCode.condition1IsTrue_0 = {val:false};
gdjs.lobbyCode.condition2IsTrue_0 = {val:false};
gdjs.lobbyCode.conditionTrue_1 = {val:false};
gdjs.lobbyCode.condition0IsTrue_1 = {val:false};
gdjs.lobbyCode.condition1IsTrue_1 = {val:false};
gdjs.lobbyCode.condition2IsTrue_1 = {val:false};


gdjs.lobbyCode.mapOfGDgdjs_46lobbyCode_46GDentrarObjects1Objects = Hashtable.newFrom({"entrar": gdjs.lobbyCode.GDentrarObjects1});gdjs.lobbyCode.eventsList0 = function(runtimeScene) {

{


gdjs.lobbyCode.condition0IsTrue_0.val = false;
{
{gdjs.lobbyCode.conditionTrue_1 = gdjs.lobbyCode.condition0IsTrue_0;
gdjs.lobbyCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22263340);
}
}if (gdjs.lobbyCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pedra_rodar.mp3", false, 20, 1);
}}

}


};gdjs.lobbyCode.mapOfGDgdjs_46lobbyCode_46GDcriarObjects1Objects = Hashtable.newFrom({"criar": gdjs.lobbyCode.GDcriarObjects1});gdjs.lobbyCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("entrar"), gdjs.lobbyCode.GDentrarObjects1);

gdjs.lobbyCode.condition0IsTrue_0.val = false;
gdjs.lobbyCode.condition1IsTrue_0.val = false;
{
gdjs.lobbyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.lobbyCode.condition0IsTrue_0.val ) {
{
gdjs.lobbyCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lobbyCode.mapOfGDgdjs_46lobbyCode_46GDentrarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.lobbyCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "entrar");
}
{ //Subevents
gdjs.lobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.lobbyCode.GDcriarObjects1);

gdjs.lobbyCode.condition0IsTrue_0.val = false;
gdjs.lobbyCode.condition1IsTrue_0.val = false;
{
gdjs.lobbyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.lobbyCode.condition0IsTrue_0.val ) {
{
gdjs.lobbyCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.lobbyCode.mapOfGDgdjs_46lobbyCode_46GDcriarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.lobbyCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "criar", false);
}}

}


};

gdjs.lobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lobbyCode.GDfundoObjects1.length = 0;
gdjs.lobbyCode.GDfundoObjects2.length = 0;
gdjs.lobbyCode.GDentrarObjects1.length = 0;
gdjs.lobbyCode.GDentrarObjects2.length = 0;
gdjs.lobbyCode.GDcriarObjects1.length = 0;
gdjs.lobbyCode.GDcriarObjects2.length = 0;

gdjs.lobbyCode.eventsList1(runtimeScene);
return;

}

gdjs['lobbyCode'] = gdjs.lobbyCode;

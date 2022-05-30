gdjs.fimbomCode = {};
gdjs.fimbomCode.GDfundoObjects1= [];
gdjs.fimbomCode.GDfundoObjects2= [];
gdjs.fimbomCode.GDminutosObjects1= [];
gdjs.fimbomCode.GDminutosObjects2= [];
gdjs.fimbomCode.GDsegundosObjects1= [];
gdjs.fimbomCode.GDsegundosObjects2= [];
gdjs.fimbomCode.GDsepararObjects1= [];
gdjs.fimbomCode.GDsepararObjects2= [];
gdjs.fimbomCode.GDlivroObjects1= [];
gdjs.fimbomCode.GDlivroObjects2= [];
gdjs.fimbomCode.GDcomecoObjects1= [];
gdjs.fimbomCode.GDcomecoObjects2= [];
gdjs.fimbomCode.GDbegginingObjects1= [];
gdjs.fimbomCode.GDbegginingObjects2= [];
gdjs.fimbomCode.GDtopolivroObjects1= [];
gdjs.fimbomCode.GDtopolivroObjects2= [];
gdjs.fimbomCode.GDumObjects1= [];
gdjs.fimbomCode.GDumObjects2= [];
gdjs.fimbomCode.GDtresObjects1= [];
gdjs.fimbomCode.GDtresObjects2= [];
gdjs.fimbomCode.GDdoisObjects1= [];
gdjs.fimbomCode.GDdoisObjects2= [];
gdjs.fimbomCode.GDquatroObjects1= [];
gdjs.fimbomCode.GDquatroObjects2= [];
gdjs.fimbomCode.GDcincoObjects1= [];
gdjs.fimbomCode.GDcincoObjects2= [];
gdjs.fimbomCode.GDseisObjects1= [];
gdjs.fimbomCode.GDseisObjects2= [];
gdjs.fimbomCode.GDseteObjects1= [];
gdjs.fimbomCode.GDseteObjects2= [];
gdjs.fimbomCode.GDoitoObjects1= [];
gdjs.fimbomCode.GDoitoObjects2= [];
gdjs.fimbomCode.GDnoveObjects1= [];
gdjs.fimbomCode.GDnoveObjects2= [];
gdjs.fimbomCode.GDdezObjects1= [];
gdjs.fimbomCode.GDdezObjects2= [];
gdjs.fimbomCode.GDonzeObjects1= [];
gdjs.fimbomCode.GDonzeObjects2= [];
gdjs.fimbomCode.GDdozeObjects1= [];
gdjs.fimbomCode.GDdozeObjects2= [];
gdjs.fimbomCode.GDsomsliderObjects1= [];
gdjs.fimbomCode.GDsomsliderObjects2= [];
gdjs.fimbomCode.GDsomObjects1= [];
gdjs.fimbomCode.GDsomObjects2= [];
gdjs.fimbomCode.GDchapeupistaObjects1= [];
gdjs.fimbomCode.GDchapeupistaObjects2= [];
gdjs.fimbomCode.GDpistafundoObjects1= [];
gdjs.fimbomCode.GDpistafundoObjects2= [];
gdjs.fimbomCode.GDxObjects1= [];
gdjs.fimbomCode.GDxObjects2= [];
gdjs.fimbomCode.GDperguntaObjects1= [];
gdjs.fimbomCode.GDperguntaObjects2= [];
gdjs.fimbomCode.GDrespostaObjects1= [];
gdjs.fimbomCode.GDrespostaObjects2= [];
gdjs.fimbomCode.GDpapelamachucadoObjects1= [];
gdjs.fimbomCode.GDpapelamachucadoObjects2= [];
gdjs.fimbomCode.GDpista_95txtObjects1= [];
gdjs.fimbomCode.GDpista_95txtObjects2= [];
gdjs.fimbomCode.GDpista_95entryObjects1= [];
gdjs.fimbomCode.GDpista_95entryObjects2= [];
gdjs.fimbomCode.GDnrpistaObjects1= [];
gdjs.fimbomCode.GDnrpistaObjects2= [];
gdjs.fimbomCode.GDtimerObjects1= [];
gdjs.fimbomCode.GDtimerObjects2= [];

gdjs.fimbomCode.conditionTrue_0 = {val:false};
gdjs.fimbomCode.condition0IsTrue_0 = {val:false};
gdjs.fimbomCode.condition1IsTrue_0 = {val:false};


gdjs.fimbomCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("minutos")) < 10;
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("minutos"), gdjs.fimbomCode.GDminutosObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDminutosObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDminutosObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("minutos")));
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("minutos")) >= 10;
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("minutos"), gdjs.fimbomCode.GDminutosObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDminutosObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDminutosObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("minutos")));
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("tempo")) < 10;
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("segundos"), gdjs.fimbomCode.GDsegundosObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDsegundosObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDsegundosObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("tempo")));
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("tempo")) >= 10;
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("segundos"), gdjs.fimbomCode.GDsegundosObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDsegundosObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDsegundosObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("tempo")));
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("tempo")) == -(1);
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("tempo").setNumber(59);
}{runtimeScene.getGame().getVariables().get("minutos").sub(1);
}}

}


{



}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("beggining"), gdjs.fimbomCode.GDbegginingObjects1);
gdjs.copyArray(runtimeScene.getObjects("comeco"), gdjs.fimbomCode.GDcomecoObjects1);
gdjs.copyArray(runtimeScene.getObjects("livro"), gdjs.fimbomCode.GDlivroObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 20, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 596, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 683, "", 0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "iniciar");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "aparecer3");
}{for(var i = 0, len = gdjs.fimbomCode.GDcomecoObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDcomecoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.fimbomCode.GDlivroObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDlivroObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "aparecer2");
}{for(var i = 0, len = gdjs.fimbomCode.GDbegginingObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDbegginingObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "aparecer1");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "aparecer");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "posicao");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "iniciar2");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "iniciar");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 20 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "iniciar") * 2, "", 0);
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "iniciar");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 596 - 30 * gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "posicao"), "", 0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "posicao");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9.5, "iniciar");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "", 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "iniciar");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "iniciar");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "aparecer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "posicao");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "posicao");
}}

}


{



}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "aparecer");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "aparecer1");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "aparecer1");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("livro"), gdjs.fimbomCode.GDlivroObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDlivroObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDlivroObjects1[i].setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "aparecer1") * 50);
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "aparecer1");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "aparecer2");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "aparecer2");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("comeco"), gdjs.fimbomCode.GDcomecoObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDcomecoObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDcomecoObjects1[i].setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "aparecer2") * 50);
}
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "aparecer2");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "aparecer3");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "aparecer3");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("beggining"), gdjs.fimbomCode.GDbegginingObjects1);
{for(var i = 0, len = gdjs.fimbomCode.GDbegginingObjects1.length ;i < len;++i) {
    gdjs.fimbomCode.GDbegginingObjects1[i].setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "aparecer3") * 50);
}
}}

}


{



}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 30, "aparecer");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "iniciar2") / 10, "", 0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "iniciar2");
}}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "iniciar2");
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
}

}


{


gdjs.fimbomCode.condition0IsTrue_0.val = false;
{
gdjs.fimbomCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 13);
}if (gdjs.fimbomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "acabou", false);
}}

}


};

gdjs.fimbomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fimbomCode.GDfundoObjects1.length = 0;
gdjs.fimbomCode.GDfundoObjects2.length = 0;
gdjs.fimbomCode.GDminutosObjects1.length = 0;
gdjs.fimbomCode.GDminutosObjects2.length = 0;
gdjs.fimbomCode.GDsegundosObjects1.length = 0;
gdjs.fimbomCode.GDsegundosObjects2.length = 0;
gdjs.fimbomCode.GDsepararObjects1.length = 0;
gdjs.fimbomCode.GDsepararObjects2.length = 0;
gdjs.fimbomCode.GDlivroObjects1.length = 0;
gdjs.fimbomCode.GDlivroObjects2.length = 0;
gdjs.fimbomCode.GDcomecoObjects1.length = 0;
gdjs.fimbomCode.GDcomecoObjects2.length = 0;
gdjs.fimbomCode.GDbegginingObjects1.length = 0;
gdjs.fimbomCode.GDbegginingObjects2.length = 0;
gdjs.fimbomCode.GDtopolivroObjects1.length = 0;
gdjs.fimbomCode.GDtopolivroObjects2.length = 0;
gdjs.fimbomCode.GDumObjects1.length = 0;
gdjs.fimbomCode.GDumObjects2.length = 0;
gdjs.fimbomCode.GDtresObjects1.length = 0;
gdjs.fimbomCode.GDtresObjects2.length = 0;
gdjs.fimbomCode.GDdoisObjects1.length = 0;
gdjs.fimbomCode.GDdoisObjects2.length = 0;
gdjs.fimbomCode.GDquatroObjects1.length = 0;
gdjs.fimbomCode.GDquatroObjects2.length = 0;
gdjs.fimbomCode.GDcincoObjects1.length = 0;
gdjs.fimbomCode.GDcincoObjects2.length = 0;
gdjs.fimbomCode.GDseisObjects1.length = 0;
gdjs.fimbomCode.GDseisObjects2.length = 0;
gdjs.fimbomCode.GDseteObjects1.length = 0;
gdjs.fimbomCode.GDseteObjects2.length = 0;
gdjs.fimbomCode.GDoitoObjects1.length = 0;
gdjs.fimbomCode.GDoitoObjects2.length = 0;
gdjs.fimbomCode.GDnoveObjects1.length = 0;
gdjs.fimbomCode.GDnoveObjects2.length = 0;
gdjs.fimbomCode.GDdezObjects1.length = 0;
gdjs.fimbomCode.GDdezObjects2.length = 0;
gdjs.fimbomCode.GDonzeObjects1.length = 0;
gdjs.fimbomCode.GDonzeObjects2.length = 0;
gdjs.fimbomCode.GDdozeObjects1.length = 0;
gdjs.fimbomCode.GDdozeObjects2.length = 0;
gdjs.fimbomCode.GDsomsliderObjects1.length = 0;
gdjs.fimbomCode.GDsomsliderObjects2.length = 0;
gdjs.fimbomCode.GDsomObjects1.length = 0;
gdjs.fimbomCode.GDsomObjects2.length = 0;
gdjs.fimbomCode.GDchapeupistaObjects1.length = 0;
gdjs.fimbomCode.GDchapeupistaObjects2.length = 0;
gdjs.fimbomCode.GDpistafundoObjects1.length = 0;
gdjs.fimbomCode.GDpistafundoObjects2.length = 0;
gdjs.fimbomCode.GDxObjects1.length = 0;
gdjs.fimbomCode.GDxObjects2.length = 0;
gdjs.fimbomCode.GDperguntaObjects1.length = 0;
gdjs.fimbomCode.GDperguntaObjects2.length = 0;
gdjs.fimbomCode.GDrespostaObjects1.length = 0;
gdjs.fimbomCode.GDrespostaObjects2.length = 0;
gdjs.fimbomCode.GDpapelamachucadoObjects1.length = 0;
gdjs.fimbomCode.GDpapelamachucadoObjects2.length = 0;
gdjs.fimbomCode.GDpista_95txtObjects1.length = 0;
gdjs.fimbomCode.GDpista_95txtObjects2.length = 0;
gdjs.fimbomCode.GDpista_95entryObjects1.length = 0;
gdjs.fimbomCode.GDpista_95entryObjects2.length = 0;
gdjs.fimbomCode.GDnrpistaObjects1.length = 0;
gdjs.fimbomCode.GDnrpistaObjects2.length = 0;
gdjs.fimbomCode.GDtimerObjects1.length = 0;
gdjs.fimbomCode.GDtimerObjects2.length = 0;

gdjs.fimbomCode.eventsList0(runtimeScene);
return;

}

gdjs['fimbomCode'] = gdjs.fimbomCode;

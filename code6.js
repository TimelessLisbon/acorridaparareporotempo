gdjs.acabouCode = {};
gdjs.acabouCode.GDpretoObjects1= [];
gdjs.acabouCode.GDpretoObjects2= [];
gdjs.acabouCode.GDfim2Objects1= [];
gdjs.acabouCode.GDfim2Objects2= [];
gdjs.acabouCode.GDfimObjects1= [];
gdjs.acabouCode.GDfimObjects2= [];

gdjs.acabouCode.conditionTrue_0 = {val:false};
gdjs.acabouCode.condition0IsTrue_0 = {val:false};


gdjs.acabouCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("fim"), gdjs.acabouCode.GDfimObjects1);
gdjs.copyArray(runtimeScene.getObjects("fim2"), gdjs.acabouCode.GDfim2Objects1);
{for(var i = 0, len = gdjs.acabouCode.GDfimObjects1.length ;i < len;++i) {
    gdjs.acabouCode.GDfimObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.acabouCode.GDfimObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.acabouCode.GDfim2Objects1.length ;i < len;++i) {
    gdjs.acabouCode.GDfim2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.acabouCode.GDfim2Objects1[i].getWidth()) / 2);
}
}}

}


};

gdjs.acabouCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.acabouCode.GDpretoObjects1.length = 0;
gdjs.acabouCode.GDpretoObjects2.length = 0;
gdjs.acabouCode.GDfim2Objects1.length = 0;
gdjs.acabouCode.GDfim2Objects2.length = 0;
gdjs.acabouCode.GDfimObjects1.length = 0;
gdjs.acabouCode.GDfimObjects2.length = 0;

gdjs.acabouCode.eventsList0(runtimeScene);
return;

}

gdjs['acabouCode'] = gdjs.acabouCode;

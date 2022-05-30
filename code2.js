gdjs.criarCode = {};
gdjs.criarCode.GDfundoObjects1= [];
gdjs.criarCode.GDfundoObjects2= [];
gdjs.criarCode.GDcriarObjects1= [];
gdjs.criarCode.GDcriarObjects2= [];
gdjs.criarCode.GDenterObjects1= [];
gdjs.criarCode.GDenterObjects2= [];
gdjs.criarCode.GDID_95textObjects1= [];
gdjs.criarCode.GDID_95textObjects2= [];
gdjs.criarCode.GDcertezaObjects1= [];
gdjs.criarCode.GDcertezaObjects2= [];
gdjs.criarCode.GDsimObjects1= [];
gdjs.criarCode.GDsimObjects2= [];
gdjs.criarCode.GDnaoObjects1= [];
gdjs.criarCode.GDnaoObjects2= [];
gdjs.criarCode.GDcopiarObjects1= [];
gdjs.criarCode.GDcopiarObjects2= [];

gdjs.criarCode.conditionTrue_0 = {val:false};
gdjs.criarCode.condition0IsTrue_0 = {val:false};
gdjs.criarCode.condition1IsTrue_0 = {val:false};
gdjs.criarCode.condition2IsTrue_0 = {val:false};
gdjs.criarCode.condition3IsTrue_0 = {val:false};


gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDcriarObjects1Objects = Hashtable.newFrom({"criar": gdjs.criarCode.GDcriarObjects1});gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDenterObjects1Objects = Hashtable.newFrom({"enter": gdjs.criarCode.GDenterObjects1});gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDnaoObjects1Objects = Hashtable.newFrom({"nao": gdjs.criarCode.GDnaoObjects1});gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDcopiarObjects1Objects = Hashtable.newFrom({"copiar": gdjs.criarCode.GDcopiarObjects1});gdjs.criarCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{


gdjs.criarCode.condition0IsTrue_0.val = false;
{
gdjs.criarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.criarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("certeza"), gdjs.criarCode.GDcertezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nao"), gdjs.criarCode.GDnaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sim"), gdjs.criarCode.GDsimObjects1);
{for(var i = 0, len = gdjs.criarCode.GDcertezaObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDcertezaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.criarCode.GDsimObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDsimObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.criarCode.GDnaoObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDnaoObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "certeza");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("certeza"), gdjs.criarCode.GDcertezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.criarCode.GDcriarObjects1);

gdjs.criarCode.condition0IsTrue_0.val = false;
gdjs.criarCode.condition1IsTrue_0.val = false;
gdjs.criarCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.criarCode.GDcertezaObjects1.length;i<l;++i) {
    if ( !(gdjs.criarCode.GDcertezaObjects1[i].isVisible()) ) {
        gdjs.criarCode.condition0IsTrue_0.val = true;
        gdjs.criarCode.GDcertezaObjects1[k] = gdjs.criarCode.GDcertezaObjects1[i];
        ++k;
    }
}
gdjs.criarCode.GDcertezaObjects1.length = k;}if ( gdjs.criarCode.condition0IsTrue_0.val ) {
{
gdjs.criarCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.criarCode.condition1IsTrue_0.val ) {
{
gdjs.criarCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDcriarObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.criarCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_text"), gdjs.criarCode.GDID_95textObjects1);
{for(var i = 0, len = gdjs.criarCode.GDID_95textObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDID_95textObjects1[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}{for(var i = 0, len = gdjs.criarCode.GDID_95textObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDID_95textObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.criarCode.GDID_95textObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("certeza"), gdjs.criarCode.GDcertezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.criarCode.GDenterObjects1);

gdjs.criarCode.condition0IsTrue_0.val = false;
gdjs.criarCode.condition1IsTrue_0.val = false;
gdjs.criarCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.criarCode.GDcertezaObjects1.length;i<l;++i) {
    if ( !(gdjs.criarCode.GDcertezaObjects1[i].isVisible()) ) {
        gdjs.criarCode.condition0IsTrue_0.val = true;
        gdjs.criarCode.GDcertezaObjects1[k] = gdjs.criarCode.GDcertezaObjects1[i];
        ++k;
    }
}
gdjs.criarCode.GDcertezaObjects1.length = k;}if ( gdjs.criarCode.condition0IsTrue_0.val ) {
{
gdjs.criarCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.criarCode.condition1IsTrue_0.val ) {
{
gdjs.criarCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDenterObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.criarCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "certeza");
}}

}


{


gdjs.criarCode.condition0IsTrue_0.val = false;
{
gdjs.criarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "certeza");
}if (gdjs.criarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("certeza"), gdjs.criarCode.GDcertezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nao"), gdjs.criarCode.GDnaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sim"), gdjs.criarCode.GDsimObjects1);
{for(var i = 0, len = gdjs.criarCode.GDcertezaObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDcertezaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.criarCode.GDsimObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDsimObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.criarCode.GDnaoObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDnaoObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "certeza");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "certeza");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("certeza"), gdjs.criarCode.GDcertezaObjects1);
gdjs.copyArray(runtimeScene.getObjects("nao"), gdjs.criarCode.GDnaoObjects1);

gdjs.criarCode.condition0IsTrue_0.val = false;
gdjs.criarCode.condition1IsTrue_0.val = false;
gdjs.criarCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.criarCode.GDcertezaObjects1.length;i<l;++i) {
    if ( gdjs.criarCode.GDcertezaObjects1[i].isVisible() ) {
        gdjs.criarCode.condition0IsTrue_0.val = true;
        gdjs.criarCode.GDcertezaObjects1[k] = gdjs.criarCode.GDcertezaObjects1[i];
        ++k;
    }
}
gdjs.criarCode.GDcertezaObjects1.length = k;}if ( gdjs.criarCode.condition0IsTrue_0.val ) {
{
gdjs.criarCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.criarCode.condition1IsTrue_0.val ) {
{
gdjs.criarCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDnaoObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.criarCode.condition2IsTrue_0.val) {
/* Reuse gdjs.criarCode.GDcertezaObjects1 */
/* Reuse gdjs.criarCode.GDnaoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("sim"), gdjs.criarCode.GDsimObjects1);
{for(var i = 0, len = gdjs.criarCode.GDnaoObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDnaoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.criarCode.GDsimObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDsimObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.criarCode.GDcertezaObjects1.length ;i < len;++i) {
    gdjs.criarCode.GDcertezaObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("copiar"), gdjs.criarCode.GDcopiarObjects1);

gdjs.criarCode.condition0IsTrue_0.val = false;
gdjs.criarCode.condition1IsTrue_0.val = false;
{
gdjs.criarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.criarCode.condition0IsTrue_0.val ) {
{
gdjs.criarCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.criarCode.mapOfGDgdjs_46criarCode_46GDcopiarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.criarCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_text"), gdjs.criarCode.GDID_95textObjects1);
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, (( gdjs.criarCode.GDID_95textObjects1.length === 0 ) ? "" :gdjs.criarCode.GDID_95textObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.criarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.criarCode.GDfundoObjects1.length = 0;
gdjs.criarCode.GDfundoObjects2.length = 0;
gdjs.criarCode.GDcriarObjects1.length = 0;
gdjs.criarCode.GDcriarObjects2.length = 0;
gdjs.criarCode.GDenterObjects1.length = 0;
gdjs.criarCode.GDenterObjects2.length = 0;
gdjs.criarCode.GDID_95textObjects1.length = 0;
gdjs.criarCode.GDID_95textObjects2.length = 0;
gdjs.criarCode.GDcertezaObjects1.length = 0;
gdjs.criarCode.GDcertezaObjects2.length = 0;
gdjs.criarCode.GDsimObjects1.length = 0;
gdjs.criarCode.GDsimObjects2.length = 0;
gdjs.criarCode.GDnaoObjects1.length = 0;
gdjs.criarCode.GDnaoObjects2.length = 0;
gdjs.criarCode.GDcopiarObjects1.length = 0;
gdjs.criarCode.GDcopiarObjects2.length = 0;

gdjs.criarCode.eventsList0(runtimeScene);
return;

}

gdjs['criarCode'] = gdjs.criarCode;

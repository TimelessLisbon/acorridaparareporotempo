gdjs.entrarCode = {};
gdjs.entrarCode.GDID_95text_95entryObjects1_1final = [];

gdjs.entrarCode.GDentrarObjects1_1final = [];

gdjs.entrarCode.GDfundoObjects1= [];
gdjs.entrarCode.GDfundoObjects2= [];
gdjs.entrarCode.GDentrarObjects1= [];
gdjs.entrarCode.GDentrarObjects2= [];
gdjs.entrarCode.GDID_95entryObjects1= [];
gdjs.entrarCode.GDID_95entryObjects2= [];
gdjs.entrarCode.GDopsObjects1= [];
gdjs.entrarCode.GDopsObjects2= [];
gdjs.entrarCode.GDID_95text_95entryObjects1= [];
gdjs.entrarCode.GDID_95text_95entryObjects2= [];
gdjs.entrarCode.GDcolarObjects1= [];
gdjs.entrarCode.GDcolarObjects2= [];
gdjs.entrarCode.GDanimacaoentrarObjects1= [];
gdjs.entrarCode.GDanimacaoentrarObjects2= [];

gdjs.entrarCode.conditionTrue_0 = {val:false};
gdjs.entrarCode.condition0IsTrue_0 = {val:false};
gdjs.entrarCode.condition1IsTrue_0 = {val:false};
gdjs.entrarCode.condition2IsTrue_0 = {val:false};
gdjs.entrarCode.condition3IsTrue_0 = {val:false};
gdjs.entrarCode.condition4IsTrue_0 = {val:false};
gdjs.entrarCode.condition5IsTrue_0 = {val:false};
gdjs.entrarCode.conditionTrue_1 = {val:false};
gdjs.entrarCode.condition0IsTrue_1 = {val:false};
gdjs.entrarCode.condition1IsTrue_1 = {val:false};
gdjs.entrarCode.condition2IsTrue_1 = {val:false};
gdjs.entrarCode.condition3IsTrue_1 = {val:false};
gdjs.entrarCode.condition4IsTrue_1 = {val:false};
gdjs.entrarCode.condition5IsTrue_1 = {val:false};
gdjs.entrarCode.conditionTrue_2 = {val:false};
gdjs.entrarCode.condition0IsTrue_2 = {val:false};
gdjs.entrarCode.condition1IsTrue_2 = {val:false};
gdjs.entrarCode.condition2IsTrue_2 = {val:false};
gdjs.entrarCode.condition3IsTrue_2 = {val:false};
gdjs.entrarCode.condition4IsTrue_2 = {val:false};
gdjs.entrarCode.condition5IsTrue_2 = {val:false};


gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects = Hashtable.newFrom({"entrar": gdjs.entrarCode.GDentrarObjects2});gdjs.entrarCode.eventsList0 = function(runtimeScene) {

{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22278900);
}
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Clicksound.mp3", false, 20, 1);
}}

}


};gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects = Hashtable.newFrom({"entrar": gdjs.entrarCode.GDentrarObjects2});gdjs.entrarCode.eventsList1 = function(runtimeScene) {

{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22281500);
}
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Clicksound.mp3", false, 20, 1);
}}

}


};gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects = Hashtable.newFrom({"entrar": gdjs.entrarCode.GDentrarObjects2});gdjs.entrarCode.eventsList2 = function(runtimeScene) {

{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22285644);
}
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "oops Sound Effect.mp3", false, 10, 1.5);
}}

}


};gdjs.entrarCode.eventsList3 = function(runtimeScene) {

{



}


{


{
}

}


{



}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("animacaoentrar"), gdjs.entrarCode.GDanimacaoentrarObjects1);
gdjs.copyArray(runtimeScene.getObjects("ops"), gdjs.entrarCode.GDopsObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDanimacaoentrarObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDanimacaoentrarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.entrarCode.GDopsObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDopsObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "iniciar");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "limpar");
}{for(var i = 0, len = gdjs.entrarCode.GDopsObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDopsObjects1[i].setTextAlignment("center");
}
}{runtimeScene.getVariables().get("limpar").setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Alice in Wonderland (Score) 2010- Little Alice.mp3", 69, true, 15, 1);
}}

}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("limpar")) == 0;
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.entrarCode.GDID_95entryObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDID_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95entryObjects1[i].activate(true);
}
}}

}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return"));
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.entrarCode.GDID_95entryObjects1);
gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDID_95text_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95text_95entryObjects1[i].setString((( gdjs.entrarCode.GDID_95entryObjects1.length === 0 ) ? "" :gdjs.entrarCode.GDID_95entryObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.entrarCode.GDID_95text_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95text_95entryObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.entrarCode.GDID_95text_95entryObjects1[i].getWidth()) / 2);
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("diaano").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "yday"));
}{runtimeScene.getVariables().get("diames").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday"));
}{runtimeScene.getVariables().get("ano").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year"));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects1);
gdjs.entrarCode.GDentrarObjects1.length = 0;


gdjs.entrarCode.condition0IsTrue_0.val = false;
gdjs.entrarCode.condition1IsTrue_0.val = false;
gdjs.entrarCode.condition2IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
{
{gdjs.entrarCode.conditionTrue_2 = gdjs.entrarCode.condition0IsTrue_1;
gdjs.entrarCode.condition0IsTrue_2.val = false;
gdjs.entrarCode.condition1IsTrue_2.val = false;
{
gdjs.entrarCode.condition0IsTrue_2.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("diaano")) >= 364;
}if ( gdjs.entrarCode.condition0IsTrue_2.val ) {
{
gdjs.entrarCode.condition1IsTrue_2.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("ano")) == 121;
}}
gdjs.entrarCode.conditionTrue_2.val = true && gdjs.entrarCode.condition0IsTrue_2.val && gdjs.entrarCode.condition1IsTrue_2.val;
}
if( gdjs.entrarCode.condition0IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
}
}
{
{gdjs.entrarCode.conditionTrue_2 = gdjs.entrarCode.condition1IsTrue_1;
gdjs.entrarCode.condition0IsTrue_2.val = false;
gdjs.entrarCode.condition1IsTrue_2.val = false;
{
gdjs.entrarCode.condition0IsTrue_2.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("diaano")) <= 6;
}if ( gdjs.entrarCode.condition0IsTrue_2.val ) {
{
gdjs.entrarCode.condition1IsTrue_2.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("ano")) == 122;
}}
gdjs.entrarCode.conditionTrue_2.val = true && gdjs.entrarCode.condition0IsTrue_2.val && gdjs.entrarCode.condition1IsTrue_2.val;
}
if( gdjs.entrarCode.condition1IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.entrarCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() == "wonderland" ) {
        gdjs.entrarCode.condition1IsTrue_0.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}if ( gdjs.entrarCode.condition1IsTrue_0.val ) {
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition2IsTrue_0;
gdjs.entrarCode.GDentrarObjects1_1final.length = 0;gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
{
gdjs.entrarCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.entrarCode.condition0IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("entrar"), gdjs.entrarCode.GDentrarObjects2);
{gdjs.entrarCode.conditionTrue_2 = gdjs.entrarCode.condition1IsTrue_1;
gdjs.entrarCode.condition0IsTrue_2.val = false;
gdjs.entrarCode.condition1IsTrue_2.val = false;
{
gdjs.entrarCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.entrarCode.condition0IsTrue_2.val ) {
{
gdjs.entrarCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects, runtimeScene, true, false);
}}
gdjs.entrarCode.conditionTrue_2.val = true && gdjs.entrarCode.condition0IsTrue_2.val && gdjs.entrarCode.condition1IsTrue_2.val;
}
if( gdjs.entrarCode.condition1IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDentrarObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDentrarObjects1_1final.indexOf(gdjs.entrarCode.GDentrarObjects2[j]) === -1 )
            gdjs.entrarCode.GDentrarObjects1_1final.push(gdjs.entrarCode.GDentrarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.entrarCode.GDentrarObjects1_1final, gdjs.entrarCode.GDentrarObjects1);
}
}
}}
}
if (gdjs.entrarCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("animacaoentrar"), gdjs.entrarCode.GDanimacaoentrarObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDanimacaoentrarObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDanimacaoentrarObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.entrarCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.entrarCode.GDID_95text_95entryObjects1.length = 0;

gdjs.entrarCode.GDentrarObjects1.length = 0;


gdjs.entrarCode.condition0IsTrue_0.val = false;
gdjs.entrarCode.condition1IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.GDID_95text_95entryObjects1_1final.length = 0;gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
gdjs.entrarCode.condition2IsTrue_1.val = false;
gdjs.entrarCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects2);
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects2.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "wonderland" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition0IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects2[k] = gdjs.entrarCode.GDID_95text_95entryObjects2[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects2.length = k;if( gdjs.entrarCode.condition0IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDID_95text_95entryObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDID_95text_95entryObjects1_1final.indexOf(gdjs.entrarCode.GDID_95text_95entryObjects2[j]) === -1 )
            gdjs.entrarCode.GDID_95text_95entryObjects1_1final.push(gdjs.entrarCode.GDID_95text_95entryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects2);
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects2.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "rabbit" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition1IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects2[k] = gdjs.entrarCode.GDID_95text_95entryObjects2[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects2.length = k;if( gdjs.entrarCode.condition1IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDID_95text_95entryObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDID_95text_95entryObjects1_1final.indexOf(gdjs.entrarCode.GDID_95text_95entryObjects2[j]) === -1 )
            gdjs.entrarCode.GDID_95text_95entryObjects1_1final.push(gdjs.entrarCode.GDID_95text_95entryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects2);
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects2.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "alice" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition2IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects2[k] = gdjs.entrarCode.GDID_95text_95entryObjects2[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects2.length = k;if( gdjs.entrarCode.condition2IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDID_95text_95entryObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDID_95text_95entryObjects1_1final.indexOf(gdjs.entrarCode.GDID_95text_95entryObjects2[j]) === -1 )
            gdjs.entrarCode.GDID_95text_95entryObjects1_1final.push(gdjs.entrarCode.GDID_95text_95entryObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects2);
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects2.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "madhatter" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition3IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects2[k] = gdjs.entrarCode.GDID_95text_95entryObjects2[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects2.length = k;if( gdjs.entrarCode.condition3IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDID_95text_95entryObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDID_95text_95entryObjects1_1final.indexOf(gdjs.entrarCode.GDID_95text_95entryObjects2[j]) === -1 )
            gdjs.entrarCode.GDID_95text_95entryObjects1_1final.push(gdjs.entrarCode.GDID_95text_95entryObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.entrarCode.GDID_95text_95entryObjects1_1final, gdjs.entrarCode.GDID_95text_95entryObjects1);
}
}
}if ( gdjs.entrarCode.condition0IsTrue_0.val ) {
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition1IsTrue_0;
gdjs.entrarCode.GDentrarObjects1_1final.length = 0;gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
{
gdjs.entrarCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.entrarCode.condition0IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("entrar"), gdjs.entrarCode.GDentrarObjects2);
{gdjs.entrarCode.conditionTrue_2 = gdjs.entrarCode.condition1IsTrue_1;
gdjs.entrarCode.condition0IsTrue_2.val = false;
gdjs.entrarCode.condition1IsTrue_2.val = false;
{
gdjs.entrarCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.entrarCode.condition0IsTrue_2.val ) {
{
gdjs.entrarCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects, runtimeScene, true, false);
}}
gdjs.entrarCode.conditionTrue_2.val = true && gdjs.entrarCode.condition0IsTrue_2.val && gdjs.entrarCode.condition1IsTrue_2.val;
}
if( gdjs.entrarCode.condition1IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDentrarObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDentrarObjects1_1final.indexOf(gdjs.entrarCode.GDentrarObjects2[j]) === -1 )
            gdjs.entrarCode.GDentrarObjects1_1final.push(gdjs.entrarCode.GDentrarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.entrarCode.GDentrarObjects1_1final, gdjs.entrarCode.GDentrarObjects1);
}
}
}}
if (gdjs.entrarCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("animacaoentrar"), gdjs.entrarCode.GDanimacaoentrarObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDanimacaoentrarObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDanimacaoentrarObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.entrarCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ID_text_entry"), gdjs.entrarCode.GDID_95text_95entryObjects1);
gdjs.entrarCode.GDentrarObjects1.length = 0;


gdjs.entrarCode.condition0IsTrue_0.val = false;
gdjs.entrarCode.condition1IsTrue_0.val = false;
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition0IsTrue_0;
gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
gdjs.entrarCode.condition2IsTrue_1.val = false;
gdjs.entrarCode.condition3IsTrue_1.val = false;
gdjs.entrarCode.condition4IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "wonderland" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition0IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}if ( gdjs.entrarCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() != "wonderland" ) {
        gdjs.entrarCode.condition1IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}if ( gdjs.entrarCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "madhatter" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition2IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}if ( gdjs.entrarCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "alice" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition3IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}if ( gdjs.entrarCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDID_95text_95entryObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDID_95text_95entryObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diaano")) + "rabbit" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("diames")) ) {
        gdjs.entrarCode.condition4IsTrue_1.val = true;
        gdjs.entrarCode.GDID_95text_95entryObjects1[k] = gdjs.entrarCode.GDID_95text_95entryObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDID_95text_95entryObjects1.length = k;}}
}
}
}
gdjs.entrarCode.conditionTrue_1.val = true && gdjs.entrarCode.condition0IsTrue_1.val && gdjs.entrarCode.condition1IsTrue_1.val && gdjs.entrarCode.condition2IsTrue_1.val && gdjs.entrarCode.condition3IsTrue_1.val && gdjs.entrarCode.condition4IsTrue_1.val;
}
}if ( gdjs.entrarCode.condition0IsTrue_0.val ) {
{
{gdjs.entrarCode.conditionTrue_1 = gdjs.entrarCode.condition1IsTrue_0;
gdjs.entrarCode.GDentrarObjects1_1final.length = 0;gdjs.entrarCode.condition0IsTrue_1.val = false;
gdjs.entrarCode.condition1IsTrue_1.val = false;
{
gdjs.entrarCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.entrarCode.condition0IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("entrar"), gdjs.entrarCode.GDentrarObjects2);
{gdjs.entrarCode.conditionTrue_2 = gdjs.entrarCode.condition1IsTrue_1;
gdjs.entrarCode.condition0IsTrue_2.val = false;
gdjs.entrarCode.condition1IsTrue_2.val = false;
{
gdjs.entrarCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.entrarCode.condition0IsTrue_2.val ) {
{
gdjs.entrarCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.entrarCode.mapOfGDgdjs_46entrarCode_46GDentrarObjects2Objects, runtimeScene, true, false);
}}
gdjs.entrarCode.conditionTrue_2.val = true && gdjs.entrarCode.condition0IsTrue_2.val && gdjs.entrarCode.condition1IsTrue_2.val;
}
if( gdjs.entrarCode.condition1IsTrue_1.val ) {
    gdjs.entrarCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.entrarCode.GDentrarObjects2.length;j<jLen;++j) {
        if ( gdjs.entrarCode.GDentrarObjects1_1final.indexOf(gdjs.entrarCode.GDentrarObjects2[j]) === -1 )
            gdjs.entrarCode.GDentrarObjects1_1final.push(gdjs.entrarCode.GDentrarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.entrarCode.GDentrarObjects1_1final, gdjs.entrarCode.GDentrarObjects1);
}
}
}}
if (gdjs.entrarCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.entrarCode.GDID_95entryObjects1);
/* Reuse gdjs.entrarCode.GDID_95text_95entryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ops"), gdjs.entrarCode.GDopsObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "limpar");
}{for(var i = 0, len = gdjs.entrarCode.GDID_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95entryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.entrarCode.GDID_95text_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95text_95entryObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.entrarCode.GDopsObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDopsObjects1[i].hide(false);
}
}{runtimeScene.getVariables().get("limpar").setNumber(1);
}
{ //Subevents
gdjs.entrarCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "limpar");
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ops"), gdjs.entrarCode.GDopsObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "limpar");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "limpar");
}{for(var i = 0, len = gdjs.entrarCode.GDopsObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDopsObjects1[i].hide();
}
}{runtimeScene.getVariables().get("limpar").setNumber(0);
}}

}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("limpar")) == 1;
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ID_entry"), gdjs.entrarCode.GDID_95entryObjects1);
{for(var i = 0, len = gdjs.entrarCode.GDID_95entryObjects1.length ;i < len;++i) {
    gdjs.entrarCode.GDID_95entryObjects1[i].activate(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("animacaoentrar"), gdjs.entrarCode.GDanimacaoentrarObjects1);

gdjs.entrarCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.entrarCode.GDanimacaoentrarObjects1.length;i<l;++i) {
    if ( gdjs.entrarCode.GDanimacaoentrarObjects1[i].isVisible() ) {
        gdjs.entrarCode.condition0IsTrue_0.val = true;
        gdjs.entrarCode.GDanimacaoentrarObjects1[k] = gdjs.entrarCode.GDanimacaoentrarObjects1[i];
        ++k;
    }
}
gdjs.entrarCode.GDanimacaoentrarObjects1.length = k;}if (gdjs.entrarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "iniciar") * 2, "", 0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "iniciar");
}}

}


{


gdjs.entrarCode.condition0IsTrue_0.val = false;
{
gdjs.entrarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "iniciar");
}if (gdjs.entrarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicio", false);
}}

}


};

gdjs.entrarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.entrarCode.GDfundoObjects1.length = 0;
gdjs.entrarCode.GDfundoObjects2.length = 0;
gdjs.entrarCode.GDentrarObjects1.length = 0;
gdjs.entrarCode.GDentrarObjects2.length = 0;
gdjs.entrarCode.GDID_95entryObjects1.length = 0;
gdjs.entrarCode.GDID_95entryObjects2.length = 0;
gdjs.entrarCode.GDopsObjects1.length = 0;
gdjs.entrarCode.GDopsObjects2.length = 0;
gdjs.entrarCode.GDID_95text_95entryObjects1.length = 0;
gdjs.entrarCode.GDID_95text_95entryObjects2.length = 0;
gdjs.entrarCode.GDcolarObjects1.length = 0;
gdjs.entrarCode.GDcolarObjects2.length = 0;
gdjs.entrarCode.GDanimacaoentrarObjects1.length = 0;
gdjs.entrarCode.GDanimacaoentrarObjects2.length = 0;

gdjs.entrarCode.eventsList3(runtimeScene);
return;

}

gdjs['entrarCode'] = gdjs.entrarCode;

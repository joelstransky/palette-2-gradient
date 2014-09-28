app;

//@includepath "/c/Program Files/Adobe/xtools/"
//@include "xlib/stdlib.js"
//@include "xlib/Stream.js"
//@include "xlib/ColorSwatches.jsx"
//@include "xlib/Gradient.jsx"


var swatches;
var gap;
function main(){
    swatches = new ColorSwatches();
    swatches.readFromRuntime();
    if(swatches.colors.length > 100){
            alert("Sorry, but you are only allowed 100 swatches");
            return;
    }else{
        gap = 4096 / (swatches.colors.length - 1);
        swatches2gradient (); 
    }

 }
main();

function swatches2gradient() {
    var flagDesc;
    function cTID(s) { return app.charIDToTypeID(s); };
    function sTID(s) { return app.stringIDToTypeID(s); };

    var gradientActionDescriptor = new ActionDescriptor();
        var gradientActionReference = new ActionReference();
        gradientActionReference.putClass( cTID('Grdn') );
        gradientActionDescriptor.putReference( cTID('null'), gradientActionReference );
        var desc45 = new ActionDescriptor();
            var gradientDescriptor = new ActionDescriptor();
            gradientDescriptor.putString( cTID('Nm  '), """Created From Swatches""" );
            gradientDescriptor.putEnumerated( cTID('GrdF'), cTID('GrdF'), cTID('CstS') );
            gradientDescriptor.putDouble( cTID('Intr'), 4096.000000 );
            var colorsList = new ActionList();
                for(var i = 0; i < swatches.colors.length; i++){
                    flagDesc =  createGradientFlag (i);
                    colorsList.putObject( cTID('Clrt'), flagDesc );
                }  
            gradientDescriptor.putList( cTID('Clrs'), colorsList );
                var transparencyList = new ActionList();
                    // first transparency descriptor
                    var firstTrnsDesc = new ActionDescriptor();
                    firstTrnsDesc.putUnitDouble( cTID('Opct'), cTID('#Prc'), 100.000000 );
                    firstTrnsDesc.putInteger( cTID('Lctn'), 0 );
                    firstTrnsDesc.putInteger( cTID('Mdpn'), 50 );
                transparencyList.putObject( cTID('TrnS'), firstTrnsDesc );
                    // last transparency flag descriptor
                    var lastTrnsDesc = new ActionDescriptor();
                    lastTrnsDesc.putUnitDouble( cTID('Opct'), cTID('#Prc'), 100.000000 );
                    lastTrnsDesc.putInteger( cTID('Lctn'), 4096 );
                    lastTrnsDesc.putInteger( cTID('Mdpn'), 50 );
                transparencyList.putObject( cTID('TrnS'), lastTrnsDesc );
            gradientDescriptor.putList( cTID('Trns'), transparencyList );
        desc45.putObject( cTID('Grad'), cTID('Grdn'), gradientDescriptor );
    gradientActionDescriptor.putObject( cTID('Usng'), cTID('Grdn'), desc45 );
    executeAction( cTID('Mk  '), gradientActionDescriptor, DialogModes.NO );
};

function createGradientFlag(id){
    
    var desc49 = new ActionDescriptor();
    var desc50 = new ActionDescriptor();
    desc50.putDouble( cTID('Rd  '), swatches.colors[id].color.rgb.red );
    desc50.putDouble( cTID('Grn '), swatches.colors[id].color.rgb.green );
    desc50.putDouble( cTID('Bl  '), swatches.colors[id].color.rgb.blue );
    desc49.putObject( cTID('Clr '), cTID('RGBC'), desc50 );
    desc49.putEnumerated( cTID('Type'), cTID('Clry'), cTID('UsrS') );
    desc49.putInteger( cTID('Lctn'), gap*id );
    desc49.putInteger( cTID('Mdpn'), 50 );  
    return desc49;
}
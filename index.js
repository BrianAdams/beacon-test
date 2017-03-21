const beaconRate = 5000;

var state={
    name: require('os').hostname(),
    //model:'trident',  //TODO: Add model detection
    battery:.7
};

var beacon

var start = function() {
    beacon = require('./beacon.js')({beaconRate});
    beacon.broadcast(_genBeaconMessage);
}

var stop = function (){
    beacon.stop();
}

var _genBeaconMessage = function(){
    state.exp=beaconRate*2; //Set the expeiration for this to 2X the broadcast rate.

    //Update the state object with new details 
    return state;
}

start();

    

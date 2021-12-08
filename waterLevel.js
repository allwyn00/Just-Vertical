var rpio = require('rpio') //include rpio to interact with the GPIO
rpio.open(11, rpio.INPUT); //use GPIO borad pin 11, and specify that it is input.
rpio.open(13, rpio.INPUT); //use GPIO borad pin 13, and specify that it is input.
rpio.open(15, rpio.INPUT); //use GPIO borad pin 15, and specify that it is input.


function level(){
    // Read the bottom sensor. If value is 0, then tank is empty.  
    if(rpio.read(11) == 0){
        console.log('Tank Empty');
 // Read the bottom sensor and middle sensor. If bottom sensor = 1 and middle sensor = 0, Water is low.       
} else if (rpio.read(11) == 1 && rpio.read(13) == 0){
        console.log('Water Level Low');
 // Read the middle sensor and top sensor. If middle sensor = 1 and top sensor = 1, Water is half.
}   else if (rpio.read(13) == 1 && rpio.read(15) == 0){
        console.log('Water Level Medium');
 // Read the top sensor. If value is 1, then tank is full.
}   else if (rpio.read(15) == 1){
        console.log('Tank Full');
    return;
}
}

setInterval(level,5000); //Sensor data are read every 5 second
   
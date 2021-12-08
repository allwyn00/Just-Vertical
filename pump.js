var rpio = require('rpio') //include rpio to interact with the GPIO
rpio.open(18, rpio.OUTPUT); //use GPIO borad pin 18, and specify that it is output.
rpio.open(40, rpio.INPUT); //use GPIO borad pin 40, and specify that it is input



while(1){
    let button =rpio.read(40); //Put your conditions here. Checking the state of pin 40 now.

    if(button == 0){
    // Set pump OFF
    rpio.write(18,0);
} else {
    // Set pump ON
    rpio.write(18,1);
}
}

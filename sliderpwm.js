const Gpio = require('pigpio').Gpio; // Include pigio to interact with Gpio
const led = new Gpio(23, {mode: Gpio.OUTPUT}); // Use Gpio board pin 23 as output

// Assign dutycycle
let dutyCycle = 100; 

// Sets the frequency in herts to be used for the Gpio.
// Assign an interger >= 0.
// Selectable frequencies depend upon the sample rate which may be 1,2,4,5,8,or 10 ms (degault is 5).
// Assigning 1 ms will set the frequency to 1Khz.
led.pwmFrequency(1);

// An integer in the range of 25 through 40000.
// Default range is 255.
led.pwmRange(100);

while(1){
    // Dutycycle - an integer >= 0(off) and <= range(fully on).
    led.pwmWrite(dutyCycle);
}
var sensor = require('node-dht-sensor'); // Require node-dht-sensor to interact with Gpio
 
sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
    
let temperaturesCelsius = [20, 12, 24, 23, 32, 10, 5];


let temperaturesFahrenheit = temperaturesCelsius.map(degree => ((degree * 9/5) + 32));


console.log(temperaturesFahrenheit);
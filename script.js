function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;
  var resultElement = document.getElementById("result");
  var convertedTemperature;

  if (isNaN(temperatureInput)) {
    resultElement.textContent = "Please enter a valid number for temperature!";
    return;
  }

  if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
    convertedTemperature = (temperatureInput * 9/5) + 32;
    resultElement.textContent = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "°F";
  } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
    convertedTemperature = (temperatureInput - 32) * 5/9;
    resultElement.textContent = temperatureInput + "°F is " + convertedTemperature.toFixed(2) + "°C";
  } else {
    resultElement.textContent = "Please choose different input and output units!";
  }
}

function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const convertFrom = document.getElementById("convertFrom").value;
  const convertTo = document.getElementById("convertTo").value;
  let result;

  if (convertFrom === convertTo) {
    result = inputTemp;
  } else if (convertFrom === "celsius") {
    switch (convertTo) {
      case "fahrenheit":
        result = (inputTemp * 9/5) + 32;
        break;
      case "kelvin":
        result = inputTemp + 273.15;
        break;
      case "rankine":
        result = (inputTemp + 273.15) * 9/5;
        break;
    }
  } else if (convertFrom === "fahrenheit") {
    switch (convertTo) {
      case "celsius":
        result = (inputTemp - 32) * 5/9;
        break;
      case "kelvin":
        result = (inputTemp + 459.67) * 5/9;
        break;
      case "rankine":
        result = inputTemp + 459.67;
        break;
    }
  } else if (convertFrom === "kelvin") {
    switch (convertTo) {
      case "celsius":
        result = inputTemp - 273.15;
        break;
      case "fahrenheit":
        result = (inputTemp * 9/5) - 459.67;
        break;
      case "rankine":
        result = inputTemp * 9/5;
        break;
    }
  } else if (convertFrom === "rankine") {
    switch (convertTo) {
      case "celsius":
        result = (inputTemp - 491.67) * 5/9;
        break;
      case "fahrenheit":
        result = inputTemp - 459.67;
        break;
      case "kelvin":
        result = inputTemp * 5/9;
        break;
    }
  }

  document.getElementById("result").innerText = `${inputTemp}° ${convertFrom.toUpperCase()} is ${result.toFixed(2)}° ${convertTo.toUpperCase()}`;
}

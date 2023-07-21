function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const convertFrom = document.getElementById("convertFrom").value;
    const convertTo = document.getElementById("convertTo").value;
    let result;
  
    if (convertFrom === convertTo) {
      result = inputTemp;
    } else if (convertFrom === "celsius" && convertTo === "fahrenheit") {
      result = (inputTemp * 9/5) + 32;
    } else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
      result = (inputTemp - 32) * 5/9;
    }
  
    document.getElementById("result").innerText = `${inputTemp}° ${convertFrom} is ${result.toFixed(2)}° ${convertTo}`;
}
  

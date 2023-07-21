function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');

    if (celsiusInput.value !== '') {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
      alert('Please enter a valid Celsius temperature!');
    }
}

function convertToCelsius() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');

    if (fahrenheitInput.value !== '') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
    } else {
      alert('Please enter a valid Fahrenheit temperature!');
    }
}
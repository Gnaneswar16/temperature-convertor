function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (inputTemperature - 32) * 5/9;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = inputTemperature - 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (inputTemperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (inputTemperature - 273.15) * 9/5 + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = inputTemperature + 273.15;
    } else if (fromUnit === "Celsius" && toUnit === "Celsius") {
        result = inputTemperature;
    } else if (fromUnit === "Kelvin" && toUnit === "Kelvin") {
        result = inputTemperature;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Fahrenheit") {
        result = inputTemperature;
    } else {
        result = "Invalid conversion";
    }

    document.getElementById("convertedResult").textContent = result.toFixed(2);
}

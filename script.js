function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    let result;
  
    // Conversion logic
    if (fromUnit === "cm" && toUnit === "m") {
      result = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
      result = inputValue / 100000;
    } else if (fromUnit === "m" && toUnit === "cm") {
      result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
      result = inputValue / 1000;
    } else if (fromUnit === "km" && toUnit === "cm") {
      result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = inputValue * 1000;
    } else {
      result = inputValue; // If fromUnit and toUnit are the same
    }
  
    document.getElementById("result").innerText = `Result: ${result} ${toUnit}`;
  }
  
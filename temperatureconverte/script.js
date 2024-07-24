document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convert');
    const clearButton = document.getElementById('clear');

    convertButton.addEventListener('click', function() {
        const degreeInput = document.getElementById('degree').value;
        const unitSelect = document.getElementById('unit').value;
        const resultInput = document.getElementById('result');

        let degree = parseFloat(degreeInput);

        if (isNaN(degree)) {
            resultInput.value = 'Please enter a valid number';
            return;
        }

        let result;

        switch (unitSelect) {
            case 'celsius':
                // Convert Celsius to Fahrenheit
                result = (degree * 9/5) + 32;
                resultInput.value = `${result.toFixed(2)}°F`;
                break;
            case 'fahrenheit':
                // Convert Fahrenheit to Celsius
                result = (degree - 32) * 5/9;
                resultInput.value = `${result.toFixed(2)}°C`;
                break;
            case 'kelvin':
                // Convert Kelvin to Celsius
                result = degree - 273.15;
                resultInput.value = `${result.toFixed(2)}°C`;
                break;
            default:
                resultInput.value = 'Please select a unit';
                break;
        }
    });

    clearButton.addEventListener('click', function() {
        document.getElementById('degree').value = '';
        document.getElementById('result').value = '';
        document.getElementById('unit').selectedIndex = 0;
    });
});

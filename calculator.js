let display = document.getElementById("display");

function press(value) {
    if (value === 'sin(') {
        display.value += 'Math.sin(';
    } else if (value === 'cos(') {
        display.value += 'Math.cos(';
    } else if (value === 'tan(') {
        display.value += 'Math.tan(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

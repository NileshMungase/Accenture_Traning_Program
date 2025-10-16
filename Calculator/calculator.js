let display = document.getElementById('display');
let current = '';
let memoryValue = 0;

function press(key) {
    current += key;
    display.value = current;
}

function clearDisplay() {
    current = '';
    display.value = '';
}

function backspace() {
    current = current.slice(0, -1);
    display.value = current;
}

function percent() {
    if (current) {
        try {
            let val = eval(current) / 100;
            current = val.toString();
            display.value = current;
        } catch {
            display.value = 'Error';
            current = '';
        }
    }
}

function plusMinus() {
    if (current) {
        try {
            let val = eval(current) * -1;
            current = val.toString();
            display.value = current;
        } catch {
            display.value = 'Error';
            current = '';
        }
    }
}

function memory(action) {
    switch(action) {
        case 'MC':
            memoryValue = 0;
            break;
        case 'MR':
            current += memoryValue.toString();
            display.value = current;
            break;
        case 'M+':
            try {
                memoryValue += Number(eval(current));
            } catch {}
            break;
        case 'M-':
            try {
                memoryValue -= Number(eval(current));
            } catch {}
            break;
    }
}

function calculate() {
    try {
        // Replace unicode operators for eval
        let expr = current.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        current = eval(expr).toString();
        display.value = current;
    } catch {
        display.value = 'Error';
        current = '';
    }
}

// Keyboard support
window.addEventListener('keydown', function(e) {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(e.key)) {
        press(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
        backspace();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});

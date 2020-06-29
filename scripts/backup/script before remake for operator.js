let arithmeticString = '';  //holds screen display
let storedArithmetic = 0;   //holds previous value of screen display
let arithmeticHolder = 0;   //holds previous value so operator buttons can be pressed without input
let calcInit = false;       //create a new string (true) or add to existing (false)
                            //based on if an operator button has been pressed
let operatorInit = false;   //orders subtraction and division correctly for 1st input vs all other inputs
let arithStringInit = false;//determines if there was an input when an operator button is pressed

const ce = document.querySelector('#ce');
ce.addEventListener('click', () => {
    console.log("ce");
    arithmeticString = '';
    storedArithmetic = 0;
    arithmeticHolder = 0;
    calcInit = false;
    operatorInit = false;
    arithStringInit = false;
    document.getElementById("displayNum").innerHTML = arithmeticString;
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    console.log("equals");
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    console.log("add");
    calcInit = true;
    console.log(arithStringInit)
    if (arithStringInit == false) {
        arithmeticString = Number(arithmeticString);
        arithmeticString = arithmeticHolder + arithmeticString;
        arithmeticString = String(arithmeticString);
    } else if (arithStringInit == true) {
        arithmeticString = Number(arithmeticString);
        arithmeticHolder = storedArithmetic;
        arithmeticString = storedArithmetic + arithmeticString;
        storedArithmetic = arithmeticString;
        arithmeticString = String(arithmeticString);
        arithStringInit = false;
    }

    if (arithmeticString.length < 8) {
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    console.log("subtract");
    calcInit = true;
    if (operatorInit == false) {
        operatorInit = true;
        arithmeticString = Number(arithmeticString);
        arithmeticString = arithmeticString - storedArithmetic;
        storedArithmetic = arithmeticString;
        arithmeticHolder = storedArithmetic;
        arithmeticString = String(arithmeticString);
        if (arithmeticString.length < 8) {
            document.getElementById("displayNum").innerHTML = arithmeticString;
        }
    } else if (operatorInit == true) {
        //arithmeticString = Number(arithmeticString);
        //arithmeticString = storedArithmetic - arithmeticString;
        //storedArithmetic = arithmeticString;
        //arithmeticString = String(arithmeticString);
        if (arithStringInit == false) {
            arithmeticString = Number(arithmeticString);
            arithmeticString = arithmeticHolder - arithmeticString;
            arithmeticString = String(arithmeticString);
        } else if (arithStringInit == true) {
            arithmeticString = Number(arithmeticString);
            arithmeticHolder = storedArithmetic;
            arithmeticString = storedArithmetic - arithmeticString;
            storedArithmetic = arithmeticString;
            arithmeticString = String(arithmeticString);
            arithStringInit = false;
        }
        if (arithmeticString.length < 8) {
            document.getElementById("displayNum").innerHTML = arithmeticString;
        }
    }
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    console.log("multiply");
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    console.log("divide");
});

const b0 = document.querySelector('#b0');
b0.addEventListener('click', () => {
    console.log("0");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '0';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '0';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b1 = document.querySelector('#b1');
b1.addEventListener('click', () => {
    console.log("1");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '1';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '1';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b2 = document.querySelector('#b2');
b2.addEventListener('click', () => {
    console.log("2");
    arithStringInit = true;
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '2';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '2';
        calcInit = false;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b3 = document.querySelector('#b3');
b3.addEventListener('click', () => {
    console.log("3");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '3';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '3';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b4 = document.querySelector('#b4');
b4.addEventListener('click', () => {
    console.log("4");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '4';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '4';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b5 = document.querySelector('#b5');
b5.addEventListener('click', () => {
    console.log("5");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '5';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '5';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b6 = document.querySelector('#b6');
b6.addEventListener('click', () => {
    console.log("6");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '6';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '6';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b7 = document.querySelector('#b7');
b7.addEventListener('click', () => {
    console.log("7");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '7';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '7';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b8 = document.querySelector('#b8');
b8.addEventListener('click', () => {
    console.log("8");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '8';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '8';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const b9 = document.querySelector('#b9');
b9.addEventListener('click', () => {
    console.log("9");
    if (arithmeticString.length < 8 && calcInit == false) {
        arithmeticString = arithmeticString + '9';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '9';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    console.log("decimal");
    if (arithmeticString.length < 8 && calcInit == false && arithmeticString.includes('.') == false) {
        arithmeticString = arithmeticString + '.';
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else if (arithmeticString.includes('.') == false) {
        arithmeticString = '0.';
        calcInit = false;
        arithStringInit = true;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});

const posneg = document.querySelector('#posneg');
posneg.addEventListener('click', () => {
    console.log("+-");
    if (arithmeticString.length < 8  && calcInit == false && arithmeticString.charAt(0) != '-') {
        arithmeticString = '-' + arithmeticString;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else if (arithmeticString.charAt(0) == '-' && calcInit == false) {
        arithmeticString = arithmeticString.slice(1);
        document.getElementById("displayNum").innerHTML = arithmeticString;
    } else {
        arithmeticString = '-';
        calcInit = false;
        document.getElementById("displayNum").innerHTML = arithmeticString;
    }
});


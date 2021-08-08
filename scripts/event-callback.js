

const callBack = {
    displayVal: [],
    
    pushZero() {
        callBack.displayVal += '0';
        display.innerHTML = callBack.displayVal;
    },
    pushOne() {
        callBack.displayVal += '1';
        display.innerHTML = callBack.displayVal;
    },
    pushTwo() {
        callBack.displayVal += '2';
        display.innerHTML = callBack.displayVal;
    },
    pushThree() {
        callBack.displayVal += '3';
        display.innerHTML = callBack.displayVal;
    },
    pushFour() {
        callBack.displayVal += '4';
        display.innerHTML = callBack.displayVal;
    },
    pushFive() {
        callBack.displayVal += '5';
        display.innerHTML = callBack.displayVal;
    },
    pushSix() {
        callBack.displayVal += '6';
        display.innerHTML = callBack.displayVal;
    },
    pushSeven() {
        callBack.displayVal += '7';
        display.innerHTML = callBack.displayVal;
    },
    pushEight() {
        callBack.displayVal += '8';
        display.innerHTML = callBack.displayVal;
    },
    pushNine() {
        callBack.displayVal += '9';
        display.innerHTML = callBack.displayVal;
    },
    pushPeriod() {
        callBack.displayVal += '.';
        display.innerHTML = callBack.displayVal;
    },
    pushSlash() {
        callBack.displayVal += '/';
        display.innerHTML = callBack.displayVal;
    },
    pushTimes() {
        callBack.displayVal += '*';
        display.innerHTML = callBack.displayVal;
    },
    pushMinus() {
        callBack.displayVal += '-';
        display.innerHTML = callBack.displayVal;
    },
    pushPlus() {
        callBack.displayVal += '+';
        display.innerHTML = callBack.displayVal;
    },
    pushReset() {
        callBack.displayVal = '';
        display.innerHTML = callBack.displayVal;
    },
    pushDel() {
        callBack.displayVal = callBack.displayVal.slice(0, -1);
        display.innerHTML = callBack.displayVal;
    },
    pushEquals() {
        if (callBack.displayVal[0] == 0) {
            let valueOmitZero = callBack.displayVal.substring(1);
            let answer = eval(valueOmitZero);
            display.innerHTML = answer;
            callBack.displayVal = answer;
        } else {
            let answer = eval(callBack.displayVal);
            display.innerHTML = answer;
            callBack.displayVal = answer;
        }
    }
}

export { callBack };
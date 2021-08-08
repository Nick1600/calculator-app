import{ callBack } from './event-callback.js'

//object selectors;
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const period = document.querySelector('.period');
const slash = document.querySelector('.slash');
const times = document.querySelector('.times');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const del = document.querySelector('.del');



//get display
//let displayVal = [];

//event listeners
zero.addEventListener('click', callBack.pushZero);
one.addEventListener('click', callBack.pushOne);
two.addEventListener('click', callBack.pushTwo);
three.addEventListener('click', callBack.pushThree);
four.addEventListener('click', callBack.pushFour);
five.addEventListener('click', callBack.pushFive);
six.addEventListener('click', callBack.pushSix);
seven.addEventListener('click', callBack.pushSeven);
eight.addEventListener('click', callBack.pushEight);
nine.addEventListener('click', callBack.pushNine);
period.addEventListener('click', callBack.pushPeriod);
plus.addEventListener('click', callBack.pushPlus);
minus.addEventListener('click', callBack.pushMinus);
times.addEventListener('click', callBack.pushTimes);
slash.addEventListener('click', callBack.pushSlash);
reset.addEventListener('click', callBack.pushReset);
del.addEventListener('click', callBack.pushDel);
equals.addEventListener('click', callBack.pushEquals);


console.log(callBack.displayVal.value);
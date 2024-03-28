//1

function joinTexts(text1, text2) {
    return text1 + ' ' + text2;
}
var joinedTexts = joinTexts("Abhishek", "Kumar");
console.log(joinedTexts);
//2

function getTextLength(text) {
    return text.length;
}
var textLength = getTextLength("Hello");
console.log(textLength);
//3

function makeUpperCase(text) {
    return text.toUpperCase();
}
var uppercaseText = makeUpperCase("hello");
console.log(uppercaseText);

//4
function makeLowerCase(text) {
    return text.toLowerCase();
}
var lowercaseText = makeLowerCase("HELLO");
console.log(lowercaseText);

//5

function extractSubstring(str, start, length) {
    return str.substr(start, length);
}
var substringExtracted = extractSubstring("Abhishek Kumar", 0, 8);
console.log(substringExtracted);

//6

function sumNumbers(number1, number2) {
    return number1 + number2;
}
var numbersSummed = sumNumbers(7, 9);
console.log(numbersSummed);

//7

function minusNumbers(number1, number2) {
    return number1 - number2;
}
var numbersMinused = minusNumbers(15, 8);
console.log(numbersMinused);

//8

function timesNumbers(number1, number2) {
    return number1 * number2;
}
var numbersTimes = timesNumbers(4, 6);
console.log(numbersTimes);

//9

function divideNums(number1, number2) {
    return number1 / number2;
}
var numbersDivided = divideNums(20, 5);
console.log(numbersDivided);

//10

function squareRoot(number) {
    return Math.sqrt(number);
}
var numberSquareRoot = squareRoot(25);
console.log(numberSquareRoot);

//11

function roundNum(number, places) {
    return number.toFixed(places);
}
var numberRounded = roundNum(2.71828, 3);
console.log(numberRounded);

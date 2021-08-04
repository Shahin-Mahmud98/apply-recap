// const number =4;
// const reminder = number%2;
// console.log(number==0);

const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number ', myNumber);

// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log('Is My number Odd', isMyNumberOdd);
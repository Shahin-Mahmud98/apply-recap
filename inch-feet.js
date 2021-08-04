function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('nani inches feet', feet);

// mile to kilometer
function mileToKilometer(miles) {
    var km = miles * 1.63;
    return km;

}

var maraton = mileToKilometer(26.2);
console.log('marathon in km: ', maraton);
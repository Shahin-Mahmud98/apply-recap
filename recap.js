var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

// conditional
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('Mama, kichu discount den na ,apni na mama !');
}

// loop
var i = 0;
while (i <= 17) {
    // do some work
    i++
}
for (i = 0; i <= 18; i++) {
    console.log(i);
}

// function
function isMoonUp() {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);

// let const

// value of variable could change
var price = 27;
price = 40;
price = 35;

// value of varible will not change
var name = 'lal e lal mr. Helal';
console.log(name);

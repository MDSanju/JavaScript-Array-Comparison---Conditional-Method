// searching index no. by colling directly element name or number
var bookPages = ['parts of speech', 'modal verbs', 'tense', 'passive voice', 'causative verbs', 'narration'];

var tenseIndex = bookPages.indexOf('tense');
console.log(tenseIndex);


var rollNumbers = [46, 55, 48, 16, 82, 54, 21, 14];
var rollIndex = rollNumbers.indexOf(54);
console.log(rollIndex);


// this is show -1 because of there is no this element here-(rule)
// console.log(rollNumbers.indexOf(162));
var minusValue = rollNumbers.indexOf(162);
console.log(minusValue);


// search position calling by index number
var secondIndex = bookPages[2];
console.log(secondIndex);


// changing array value by calling index number
console.log(rollNumbers);
rollNumbers[4] = 11;
rollNumbers[6] = 10;
rollNumbers[7] = 98;
console.log(rollNumbers);



// new added
var phones = ['iPhone', 'Shawmi', 'Samsung', 'OnePlus', 'HTC'];

// check oppo not exists in an array
if (phones.indexOf('Oppo') == -1) {
    console.log('There is no Oppo Camera Phone here!');
}

// if iPhone is available here. cool!
if (phones.indexOf('iPhone') != -1) {
    console.log('WOW! iPhone is really Cool!');
}
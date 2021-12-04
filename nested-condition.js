var myAccount = 500;
var burgerPrice = 400;
var coffeePrice = 200;
var halimPrice = 100;
var cheesMust = true;


// i can use else if how many else if i want to use
// if (myAccount > burgerPrice) {
//     console.log('Have Burger!');
// } else if (myAccount > coffeePrice) {
//     console.log('Cold Coffee have!');
// } else {
//     console.log('Nihari With Halim!');
// }

// nesting, I can put more if and else inside an if or an else
if (burgerPrice < myAccount) {
    if (cheesMust == true) {
        console.log("WMMM! Yammi Chees Burger!");
    } else {
        console.log('Halim Nehari');
    }
}
var number = parseInt(prompt('Введите число от 0 до 999'))

var digits = {};
function num (number){
var digits = {};
if (number >= 0 && number<=999 ){
digits.единицы = (number % 10);
number = Math.floor(number / 10);
digits.десятки = (number % 10);
number = Math.floor(number / 10);
digits.сотни = (number % 10);
number = Math.floor(number / 10);
return digits
}
else if(number >999) {
return console.log("Вы ввели число более 999" + digits);
}
}
console.log(num(number));



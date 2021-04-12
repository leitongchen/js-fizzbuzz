// array che contiene i valori
var allNumbers = [];



// ciclo che stampa i numeri fino a 100
for (var i = 1; i <= 100; i++) {

    //variabile per i numeri multipli di 3 e di 5
    var fizz = i % 3 === 0;
    var buzz = i % 5 === 0;

    var numeri = i;

    //determinare se i num sono fizz, buzz, o fizzbuzz

    if (fizz && buzz) {
        numeri = "FizzBuzz";

    } else if (buzz && !fizz) {
        numeri = "Buzz";

    } else if (fizz && !buzz) {
        numeri = "Fizz";

    } else {}


    /* if (i % 3 === 0 && i % 5 === 0) {
        numeri = "FizzBuzz";

    } else if (i % 5 === 0) {
        numeri = "Buzz";

    } else if (i % 3 === 0) {
        numeri = "Fizz";

    } */

    //i valori ottenuti vengono pushati nell'array allNumbers
    allNumbers.push(numeri);

}

// stampare allNumbers che contiene sia num che fizz e buzz al posto dei multipli di 3 e 5
console.log(allNumbers.join(" - "));
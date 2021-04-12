// array che contiene i valori
var allNumbers = [];


// ciclo che stampa i numeri fino a 100
for (var i = 1; i <= 100; i++) {

    //variabile per i numeri multipli di 3 e di 5
    /* var fizz = i % 3 === 0;
    var buzz = i % 5 === 0; */ 

    var numeri = i;


    if (i % 3 === 0 && i % 5 === 0) {
        numeri = "fizzBuzz";

    } else if (i % 5 === 0) {
        numeri = "buzz";

    } else if (i % 3 === 0) {
        numeri = "fizz";

    }

    allNumbers.push(numeri);
    //i valori ottenuti vengono pushati nell'array allNumbers

}

    // stampare allNumbers che contiene sia num che fizz e buzz al posto dei multipli di 3 e 5

    console.log(allNumbers.join(" - "));
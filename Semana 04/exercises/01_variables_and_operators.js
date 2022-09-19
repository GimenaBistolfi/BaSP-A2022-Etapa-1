console.log('--EXERCISE 1: VARIABLES AND OPERATORS');
//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
//números en una 3er variable.

console.log('Exercise 1.a:');

var age = 20;
var weight = 60;

var sumOfNumbers = age + weight;
console.log(sumOfNumbers);


//b.Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Exercise 1.b:');

var greeting = 'welcome';
var theName = 'Gimena';

var welcomeGimena = (greeting + " " + theName);
console.log(welcomeGimena);

//c.Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
//guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('Exercise 1.c:');

var one = 'Me llamo';
var two = 'Gimena Bistolfi';
var result = one.length + two.length;
console.log(result);
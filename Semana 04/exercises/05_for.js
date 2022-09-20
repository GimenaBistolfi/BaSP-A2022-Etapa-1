console.log('--EXERCISE 5: FOR');


//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
// mostrar una alerta utilizando cada una de las palabras.


console.log('Exercise 5.a:');

countries = ['Uruguay', 'Argentina', 'Paraguay', 'Brasil', 'Chile']

for (let index = 0; index < countries.length; index++) {
    alert(countries[index]);
}

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por 
//cada palabra modificada.


console.log('Exercise 5.b:');

var one = 'uruguay';
var modifiedOne = one.substring(0,1).toUpperCase() + one.substring(1, one.length)
.toLowerCase();
alert(modifiedOne);

var two = 'argentina';
var modifiedTwo = two.substring(0,1).toUpperCase() + two.substring(1, two.length)
.toLowerCase();
alert(modifiedTwo);

var three = 'paraguay';
var modifiedThree = three.substring(0,1).toUpperCase() + three.substring(1, three.length)
.toLowerCase();
alert(modifiedThree);

var four = 'brasil';
var modifiedFour = four.substring(0,1).toUpperCase() + four.substring(1, four.length)
.toLowerCase();
alert(modifiedFour);

var five = 'chile';
var modifiedFive = five.substring(0,1).toUpperCase() + five.substring(1, five.length)
.toLowerCase();
alert(modifiedFive);


//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
// recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.


console.log('Exercise 5.c:');

var sentence = '';
countries = ['Uruguay', 'Argentina', 'Paraguay', 'Brasil', 'Chile']

for (let index = 0; index < countries.length; index++) {
    sentence += countries[index].toString(countries);
}
alert(sentence);


//d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la 
//repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
// desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final 
//(utilizar console.log).

console.log('Exercise 5.d:');

var arraydi = [];

for (var i = 0; i < 10; i++) {
  arraydi.push(arraydi[i]);
}

console.log(arraydi);

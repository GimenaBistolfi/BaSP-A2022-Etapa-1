console.log('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
// "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
//(utilizar console.log).

console.log('Exercise 3.a:');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(months[4]);
console.log(months[10]);

//b.Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)

console.log('Exercise 3.b:');

var alphabetically = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(alphabetically.sort());

//c.Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercise 3.c:');

var add = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

add.unshift('Start');
add.push('End');

console.log(add)

//d.Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercise 3.d:');

var putOff = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

putOff.shift();

console.log(putOff)

//e.Invertir el orden del array (utilizar reverse).

console.log('Exercise 3.e:');

var inverse = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

inverse.reverse();

console.log(inverse);

//f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
// (utilizar join).

console.log('Exercise 3.f:');

var script = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];


console.log(script.join('-'));

//g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g:');

var array = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

var subarray = array.slice(4, 11);


console.log(subarray);





console.log('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('Exercise 3.a:');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses[4]);
console.log(meses[10]);

//b.Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)

console.log('Exercise 3.b:');

var alfabeticamente = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(alfabeticamente.sort());

//c.Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercise 3.c:');

var agregar = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(agregar.unshift(1));
console.log(agregar.push(1));

//d.Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercise 3.d:');

var quitar = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(quitar.shift());
console.log(quitar.pop());






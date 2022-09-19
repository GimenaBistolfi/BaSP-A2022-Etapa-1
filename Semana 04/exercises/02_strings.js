console.log('--EXERCISE 2: STRINGS');
//a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//(utilizar toUpperCase).

console.log('Exercise 2.a:');

var capitalLatter = 'Hello, I hope you are very well';

console.log(capitalLatter.toUpperCase());


//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
// 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.b:');


var fullString = 'Uncopyrightable';

var cutString = (fullString.substring(-1,5));

console.log(cutString);

//c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
//caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.c:');


var allCharacters = 'abdominals';

var lastThree = allCharacters.substring(7);

console.log(lastThree);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
//toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.d:');

var tenLatters = 'accelerant';
var tenLattersModified = tenLatters.substring(0,1).toUpperCase() + tenLatters.substring(1, tenLatters.length)
.toLowerCase();

console.log(tenLattersModified);


//e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('Exercise 2.e:');

var space = 'grammatically fine';

var thisSpace = space.indexOf(" ");

console.log(thisSpace);

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
//entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga 
//la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf,
// substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.f:');

var twoWordsBoards = 'situation comparable';
var lastresult = twoWordsBoards.substring(0,1).toUpperCase() + twoWordsBoards.substring(1, twoWordsBoards.indexOf(' '))
 + twoWordsBoards.substring(twoWordsBoards.indexOf(' '),twoWordsBoards.indexOf(' ') + 2).toUpperCase()
  + twoWordsBoards.substring(twoWordsBoards.indexOf(' ') + 2,twoWordsBoards.length).toLowerCase();

console.log(lastresult);














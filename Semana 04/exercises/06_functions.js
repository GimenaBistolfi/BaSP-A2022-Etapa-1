console.log('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
//guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a:');

var numberOne = 15
var numberTwo = 15

function sum(_num1,_num2){
    return _num1 + _num2;
}

var endFigure = sum(numberOne,numberTwo);

console.log('Value 1: ' + numberOne);
console.log('Value 2: ' + numberTwo);
console.log('endfigure: ' + endFigure);



//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es
// un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y 
//retornar el valor NaN como resultado.

console.log('Exercise 6.b:');

function addition(_num1, _num2, _message){
    if (!isNaN(_num1) && !isNaN(_num2)) {
      return _num1 + _num2;
    } else {
      return _message;
    }
  }
  
  var numberThree = 15;
  var numberFour = 'g';
  var message1 = 'error: values must be numeric';
  var addition1 = addition(numberThree,numberFour,message1);
  
  console.log('Value 1: ' + numberThree);
  console.log('Value 2: ' + numberFour);
  console.log('Addition: ' + addition1);

  alert('error: values must be numeric');

//c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero
// si es un número entero.

console.log('Exercise 6.c:');

function validateInteger(_val){
    if (!isNaN(_val)) {
      return true;
    } else {
      return false;
    }
  }
  
  var numberFive = 90;
  
  console.log(validateInteger(numberFive));


//d.A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide
// que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el 
//número convertido a entero (redondeado).


console.log('Exercise 6.d:');

function theNumbers6d (numberOne,numberTwo){
    if (validateInteger (numberOne) && validateInteger(numberTwo)) {
        return numberOne + numberTwo;
    }else {
        return alert('Uno de los parametros tiene un error'), (Math.round(numberOne) + " " + Math.round(numberTwo));

    }
}

console.log(theNumbers6d (10,10));



//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
//probando que todo siga funcionando igual.

console.log('Exercise 6.e:');

function becomeInteger(_val){
    if (!Number.isInteger(_val)){
      return parseInt(_val);
    }
  }
  
  function addition3(_num1, _num2){  
    if (validateInteger(_num1) && validateInteger(_num2)) {
      return alert(becomeInteger(_num1) + becomeInteger(_num2));
    } else {
      return alert('values must be integer' + Math.round(_num1) + ' ' + Math.round(_num2));
    }
  }



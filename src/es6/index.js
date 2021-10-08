
function newFunction(name, age,country){
    var name = name || 'Edwar';
    var age = age || 47;
    var country = 'Venezuela';
    console.log(name, age, country);
}

// Ahora como es en ES6

function newFunction2(name = 'Edwar', age = 47, country = 'Venezuela'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Carlos', '14', 'USA');

// Template Literals

// antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ahora usando Template Literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//************************************************************ */
// La diferencia entre
// Una delaracion Var y let
// La funcion usando var
function printNumbers() {
	var i;

	for (i = 0; i < 10; i++) {
		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers();

//la funcion usando Let
function printNumbers() {
	for (let i = 0; i < 10; i++) {
		// Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers();

//********************************************************* */

// La Multilinea en los Strings
// Como se hacia antes

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, porro ea fuga, \n"
+ "Otra parte del texto que se necesita para el ejemplo.";

// Ahora con ECMAScript
let lorem2 = `Nuevamente una Frase Epica que se necesita para el ejemplo y presionamos Enter
Notese como las comillas francesas permiten introducir un Enter para continuar la misma linea`;

console.log(lorem);
console.log(lorem2);

// Ahora, LA DESTRUCTURACION
// Se crea el Objeto person
// Antes de la Version 6
let person = {
    'name': 'Edwar',
    'age': 47,
    'country': 'Venezuela'
};
console.log(person.name, person.age, person.country);

// ahora con ES6
let { name, age } = person;

console.log(name, age);

// Se trabaja con Arreglos

let team1 = ['Edwar', 'Barbara', 'Carlos Manuel'];
let team2 = ['Mayela', 'Matias', 'Manuel Felipe'];

let education = ['David', ...team1, ...team2];

console.log(education);

// La diferencia entre Var y Let

{
    var globalvar = "Global var";
}

{
    let globalLet = 'Global Let';
}

console.log(globalvar);
console.log(globalLet);

// Notese la diferencia
{
    var globalvar = "Global var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalvar);

// Constante
//Aqui da error
const nombre = 'Edwar';
nombre = 'Carlos';
console.log(nombre);

// Aqui no da error
var nombre = 'Edwar';
nombre = 'Carlos';
console.log(nombre);

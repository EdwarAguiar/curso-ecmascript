

let name = 'Edwar';
let age = 47;

// Antes con ES5

obj = { name: name, age: age };
console.log(obj);

// Ahora con ES6

obj2 = { name, age };
console.log(obj2);


// Entendiendo las Funciones tipo flecha

// Se crea un arreglo de Objetos
const names = [
    {name: 'Edwar', age: 47},
    {name: 'Barbara', age: 47},
    {name: 'Carlos', age: 14}
];

// Para iterar por cada uno de estos elementos para mostrarlos en la consola
// utilizaria el metodo map, y normalmente lo que haria es pasarle una funcion
// donde voy a tener este valor

let listOfNames = names.map(function (item){
    console.log(item.name);
});

// Entonces, las Arrow "=>" Functions son Funciones Anonimas

// Ahora con ES6
// Se crea un arreglo de Objetos
const names = [
    {name: 'Edwar', age: 47},
    {name: 'Barbara', age: 47},
    {name: 'Carlos', age: 14}
];

let ListOfNames2 = names.map(item => console.log(item.name));

// Como se puede observar, la Arrow Function ahorra codigo
// Una vez que se entiende, es facil de aplicar

// Otras Formas

const listOfNames3 = (name, age, country) => {
    //Aqui Bloque de codigo
}

const listOfNames4 = name => {
    //Aqui Bloque de codigo
}

// En este caso
// Se genera un funcion, la cual recibe un valor que es "num"
// Y lo que hace la funcion es multiplicar ese valor por si mismo, y returna el valor.
// etsa forma lo simplifica todo, no crear llaves y tampoco hay que crear un return
// ventajas de la arrow function

const square = num => num * num;


// LAS Promesas
// Con las cuales se va a trabajar el Asincronismo
// JavaScript no es un Lenguaje que es sincronico, es decir, que pueda ejecutar muchos elementos
// al mismo tiempo, sino que va ejecutando, elemento por elemento.
// Entonces, para manejar el Asincronismo (Es decir que dos eventos no van a suceder al mismo tiempo)
// Se han incorporado las promesas


const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!!');
        }
    });
}

helloPromise()
    .then (response => console.log(response))
    .catch(error => console.log(error));



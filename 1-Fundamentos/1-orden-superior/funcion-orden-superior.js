console.log('Funciones de orden superior');

// inicializar variables

function suma(a, b) {
    return a + b;
}   

let resultado = suma(5, 6);

let funt = suma;

function ordenSuperior (a, b, fn) {
    let res = fn(a, b);
    console.log(`Resultado ${a} + ${b}: ${res}`);
}

ordenSuperior(5, 6, suma);
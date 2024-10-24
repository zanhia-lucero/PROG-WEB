let num1 = parseFloat(prompt('Ingresa el numero 1:'));
let num2 = parseFloat(prompt('Ingresa el numero 2:'));
let opcion = prompt('Elige una operacion: +, -, *, /');

function calcular(opcion, num1, num2) {
    switch (opcion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Opción no válida.";
    }
}

let resultado = calcular(opcion, num1, num2);
console.log('El resultado es: ' + resultado);

 // Guardar en el historial
 historial.push(`${num1} ${opcion} ${num2} = ${resultado}`);
 return resultado;


// Mostrar el resultado
console.log('El resultado es: ' + resultado);

// Mostrar el historial de cálculos
console.log("Historial de cálculos:");
historial.forEach(calculo => {
 console.log(calculo);
});
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


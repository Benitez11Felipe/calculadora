function realizarSuma() {
    console.log("Su respuesta fue Suma");

    let cantidad = prompt("¿Cuántos números desea sumar?");
    console.log("Desea sumar " + cantidad + " valores");

    if (!isNaN(cantidad)) {

        let suma = 0;

        for (let i = 0; i < cantidad; i++) {
            let sumar = prompt("Ingresar valor " + (i + 1) + ":");
            console.log("Valor " + (i + 1) + ": " + sumar);

            sumar = parseFloat(sumar);

            if (!isNaN(sumar)) {
                suma += sumar;
            } else {
                alert("Por favor, ingrese un número válido.");
                i--;
            }
        }

        alert("El resultado de la suma de los " + cantidad + " números que ingresó es: " + suma);
        console.log("El resultado de la suma de los " + cantidad + " números que ingresó es: " + suma);
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function realizarResta() {
    console.log("Su respuesta fue Resta");

    while (true) {
        let primerNumero = prompt("Ingrese el primer número:");
        console.log("El primer valor que se ingresó fue: " + primerNumero);

        let segundoNumero = prompt("Ingrese el segundo número:");
        console.log("El segundo valor que se ingresó fue: " + segundoNumero);

        let primerNumeroConvertido = parseFloat(primerNumero);
        let segundoNumeroConvertido = parseFloat(segundoNumero);

        if (!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido)) {
            let restaTotal = primerNumeroConvertido - segundoNumeroConvertido;

            console.log(primerNumero + " - " + segundoNumero + " = " + restaTotal);

            alert("El resultado de la resta es: " + restaTotal);
            console.log("El resultado de la resta es: " + restaTotal);
            break;
        } else {
            alert("Por favor, ingrese números válidos.");
        }
    }
}

function realizarMultiplicacion() {
    console.log("Su respuesta fue Multiplicación");

    while (true) {
        let primerNumero = prompt("Ingrese el primer número:");
        console.log("El primer valor que se ingresó fue: " + primerNumero);
        let segundoNumero = prompt("Ingrese el segundo número:");
        console.log("El segundo valor que se ingresó fue: " + segundoNumero);

        let primerNumeroConvertido = parseFloat(primerNumero);
        let segundoNumeroConvertido = parseFloat(segundoNumero);

        if (!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido)) {
            let multiplicacion = primerNumeroConvertido * segundoNumeroConvertido;

            console.log(primerNumero + " x " + segundoNumero + " = " + multiplicacion);

            alert("El resultado de la multiplicación es: " + multiplicacion);
            console.log("El resultado de la multiplicación es: " + multiplicacion);
            break;
        } else {
            alert("Por favor, ingrese números válidos.");
        }
    }
}

function realizarDivision() {
    console.log("Su respuesta fue División");

    while (true) {
        let primerNumero = prompt("Ingrese el primer número:");
        console.log("El primer valor que se ingresó fue: " + primerNumero);

        let segundoNumero = prompt("Ingrese el segundo número:");
        console.log("El segundo valor que se ingresó fue: " + segundoNumero);

        let primerNumeroConvertido = parseFloat(primerNumero);
        let segundoNumeroConvertido = parseFloat(segundoNumero);

        if (!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido) && segundoNumeroConvertido !== 0) {
            let division = primerNumeroConvertido / segundoNumeroConvertido;
            console.log(primerNumero + " / " + segundoNumero + " = " + division);

            alert("El resultado de la división es: " + division);
            console.log("El resultado de la división es: " + division);
            break;
        } else {
            alert("Por favor, ingrese números válidos y asegúrese de que el segundo número no sea cero.");
        }
    }
}

alert("Hola! bienvenido a la calculadora online");
console.log("Hola! bienvenido a la calculadora online");

let decision = 1;

while (decision == 1) {
    let respuesta = prompt("¿Qué operación desea realizar?\n1: Suma\n2: Resta\n3: Multiplicación\n4: División");
    console.log("Que operación desea realizar?");

    switch (respuesta) {
        case "1":
            realizarSuma();
            break;
        case "2":
            realizarResta();
            break;
        case "3":
            realizarMultiplicacion();
            break;
        case "4":
            realizarDivision();
            break;
        default:
            alert("Por favor, ingrese un número válido.");
    }

    decision = prompt("Desea hacer otra operación?\n1: Si\n2: No");

    if (decision == 1) {
        console.log("Que otra operación desea realizar?");
    } else if (decision == 2) {
        console.log("Muchas gracias! Hasta luego!");
        alert("Muchas gracias! Hasta luego!");
    }
}

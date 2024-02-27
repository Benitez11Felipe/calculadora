alert("Hola! bienvenido a la calculadora online");
console.log ("Hola! bienvenido a la calculadora online");

let respuesta = prompt("¿Qué operación desea realizar?\n1: Suma\n2: Resta\n3: Multiplicación\n4: División");
console.log ("Que operacion desea realizar?");

let nada = 0;
let suma = 0;
let restaTotal = 0;
let multiplicacion = 0;
let division = 0;
let decision = 1;

while (decision == 1){

    while(true){

        if (respuesta == 1) {

            console.log ("Su respuesta fue Suma")

            let cantidad = prompt("¿Cuántos números desea sumar?");

            console.log ("Desea sumar "+cantidad+" valores");
        
            if(!isNaN(cantidad)){
        
                while (nada < cantidad){
        
                    nada++;
            
                    let sumar = prompt("Ingresar valor " + nada + ":");

                    console.log ("Valor "+nada+": "+sumar);
                    
                    sumar = parseFloat(sumar);
            
                    if(!isNaN(sumar)){
            
                        suma = suma + sumar;
            
                    }else{
            
                        alert("Por favor, ingrese un número válido.");
                        nada--;
            
                    }
            
                }
        
            }else{
        
                alert("Por favor, ingrese un número válido.");
                nada--;
        
            }
        
            alert("El resultado de la suma de los "+nada+" números que ingresó es: " + suma);
            console.log ("El resultado de la suma de los "+nada+" números que ingresó es: "+ suma);

            break;
        
        }else if (respuesta == 2){

            console.log ("Su respuesta fue Resta")
        
            while (true){
        
                let primerNumero = prompt("Ingrese el primer número:");
                console.log ("El primer valor que se ingreso fue: "+primerNumero);

                let segundoNumero = prompt("Ingrese el segundo número:");
                console.log ("El segundo valor que se ingreso fue: "+segundoNumero);
            
                let primerNumeroConvertido = parseFloat(primerNumero);
                let segundoNumeroConvertido = parseFloat(segundoNumero);
            
                if(!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido)){
        
                    restaTotal = primerNumeroConvertido - segundoNumeroConvertido;

                    console.log (primerNumero+" - "+segundoNumero+" = "+restaTotal);
        
                    alert("El resultado de la resta es: " + restaTotal);
                    console.log ("El resultado de la resta es: " + restaTotal);
                    break;
        
                }else{
        
                    alert("Por favor, ingrese números válidos.");
        
                }
        
            }

            break;
        
        }else if (respuesta == 3) {
            
            console.log ("Su respuesta fue Multiplicacion")
        
            while (true){
        
                let primerNumero = prompt("Ingrese el primer número:");
                console.log ("El primer valor que se ingreso fue: "+primerNumero);
                let segundoNumero = prompt("Ingrese el segundo número:");
                console.log ("El segundo valor que se ingreso fue: "+segundoNumero);
            
                let primerNumeroConvertido = parseFloat(primerNumero);
                let segundoNumeroConvertido = parseFloat(segundoNumero);
            
                if(!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido)){
        
                    multiplicacion = primerNumeroConvertido * segundoNumeroConvertido;

                    console.log (primerNumero+" x "+segundoNumero+" = "+multiplicacion);
        
                    alert("El resultado de la multiplicación es: " + multiplicacion);
                    console.log ("El resultado de la multiplicacion es: " + multiplicacion);
                    break;
        
                }else{
        
                    alert("Por favor, ingrese números válidos.");
        
                }
        
            }

            break;
                
        }else if (respuesta == 4) {
            
            console.log ("Su respuesta fue Division")
        
            while (true){
        
                let primerNumero = prompt("Ingrese el primer número:");
                console.log ("El primer valor que se ingreso fue: "+primerNumero);

                let segundoNumero = prompt("Ingrese el segundo número:");
                console.log ("El segundo valor que se ingreso fue: "+segundoNumero);
            
                let primerNumeroConvertido = parseFloat(primerNumero);
                let segundoNumeroConvertido = parseFloat(segundoNumero);
            
                if(!isNaN(primerNumeroConvertido) && !isNaN(segundoNumeroConvertido)){
        
                    division = primerNumeroConvertido / segundoNumeroConvertido;
                    console.log (primerNumero+" / "+segundoNumero+" = "+division);
        
                    alert("El resultado de la división es: " + division);
                    console.log ("El resultado de la division es: " + division);
                    break;
        
                }else{
        
                    alert("Por favor, ingrese números válidos.");
        
                }
        
            }

            break;
        
        } else if (isNaN(respuesta) || respuesta >= 5){
        
            alert("Por favor, ingrese un numero valido.");

            respuesta = prompt("¿Qué operación desea realizar?\n1: Suma\n2: Resta\n3: Multiplicación\n4: División");
        
        }

    }

    decision = prompt("Desea hacer otra operacion?\n1: Si\n2: No");

    if (decision == 1 ){
        
        console.log ("Que otra operacion desea realizar?");
        respuesta = prompt("¿Qué operación desea realizar?\n1: Suma\n2: Resta\n3: Multiplicación\n4: División")
        
    }else if (decision == 2){

        console.log ("Muchas gracias! Hasta luego!");
        alert ("Muchas gracias! Hasta luego!");

    }

}
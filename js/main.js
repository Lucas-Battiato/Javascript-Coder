/*function pedido() {

    let nombre;

    do {
        nombre = prompt("Bienvenido a Hamburguesería Kian. Por favor ingrese su nombre.");

    } while (nombre.length < 3 || nombre.length > 12);

    //Utilización de IF
    //if(hamburguesa.toLowerCase() == "hamburguesa simple"){
    //    alert(nombre + " seleccionaste una Hamburguesa Simple");
    //    }
    //    else if (hamburguesa.toLowerCase() == "hamburguesa completa"){
    //        alert(nombre + " seleccionaste una Hamburguesa Completa");
    //    }
    //    else if (hamburguesa.toLowerCase() == "hamburguesa kian"){
    //        alert(nombre + " seleccionaste una Hamburguesa Kian");
    //    }
    //    else{
    //        alert("Nombre de hamburguesa incorrecta")
    //    }

    const valor = {
        simple: 3000,
        completa: 4000,
        kian: 5000,
    };

    let compraTotal = 0;

    do {

        let hamburguesa = prompt(nombre + " que hamburguesa desearías pedir? \n1.Simple.  \n2.Completa.  \n3.Kian. ");

        let eleccionHamburguesa;

        switch (hamburguesa.toLowerCase()) {

            case "simple":
                eleccionHamburguesa = "simple";
                alert(nombre + " seleccionaste una Hamburguesa Simple.");
                break;

            case "completa":
                elecciónHamburguesa = "completa";
                alert(nombre + " seleccionaste una Hamburguesa Completa.");
                break;

            case "kian":
                eleccionHamburguesa = "kian";
                alert(nombre + " seleccionaste una Hamburguesa Kian.");
                break;

            default:
                alert("Nombre de hamburguesa incorrecta");
        }

        if (eleccionHamburguesa) {
            compraTotal += valor[eleccionHamburguesa];
            alert("Su pedido es hamburguesa " + eleccionHamburguesa + ". El valor total es : $" + valor[eleccionHamburguesa]);
        }

        var agregar = prompt("Desearía agregar algo mas? Si o No").toLowerCase();

    } while (agregar === "si");

    alert("Muchas gracias por su compra, el precio final es : $" + compraTotal);
}
pedido()
//* En este código se puede visualizar como primero le pedimos que ingrese un nombre valido, luego hago unas variables de almacenamiento, después determino la eleccion del pedido, se suma el precio total, se hace un ciclo por si quiere agregar mas elecciones y al final le muestra el resultado total.
*/


/*let bebida = prompt("Ingrese vino, cerveza, refresco o agua").toLowerCase();
if (bebida == "vino" || bebida == "cerveza" || bebida == "refresco" || bebida == "agua"){
    alert("Dirigase al bar")
}
    else{ alert("Dirigase a la tienda")}
*/

/*let kilometros = parseInt(prompt("Ingrese kilometros recorridos"));
let horas = parseInt(prompt("Ingrese horas recorridas"));

let resta = parseInt(kilometros/horas);

if(resta <= 60 && resta >= 40){
    alert("Aprobado")
}
else{
    alert("Desaprobado");
}
*/

/*function pedirNombre() {
    let nombre;
    while (!nombre || nombre.length <= 3) {
        nombre = prompt("Por favor, ingrese su nombre (debe tener más de 3 letras):");
        if (!nombre || nombre.length <= 3) {
            alert("Nombre incorrecto, vuelva a intentarlo.");
        }
    }
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    alert("¡Bienvenido, " + nombre + "!");
}
pedirNombre();



function compra() {
    const opciones = {
        manzana: 2.5,
        banana: 1.75,
        naranja: 3.0
    };

    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        const opcion = prompt("Por favor, ingresa una opción (manzana, banana o naranja):").toLowerCase();
        switch (opcion) {
            case "manzana":
                total += opciones.manzana;
                break;
            case "banana":
                total += opciones.banana;
                break;
            case "naranja":
                total += opciones.naranja;
                break;
            default:
                alert("¡Opción inválida! Por favor, selecciona una opción válida.");
                continue;
        }

        seguirComprando = confirm("¿Deseas agregar otra opción?");
    }

    alert(`Gracias por tu compra. El precio total es $${total.toFixed(2)}.`);
}

// Llama a la función para comenzar la compra
compra();

/*function compra() {
    const opciones = {
        manzana: 2.5,
        banana: 1.75,
        naranja: 3.0
    };

    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        const opcion = prompt("Por favor, ingresa una opción (manzana, banana o naranja):").toLowerCase();
        switch (opcion) {
            case "manzana":
                total += opciones.manzana;
                break;
            case "banana":
                total += opciones.banana;
                break;
            case "naranja":
                total += opciones.naranja;
                break;
            default:
                alert("¡Opción inválida! Por favor, selecciona una opción válida.");
                continue;
        }

        seguirComprando = confirm("¿Deseas agregar otra opción?");
    }

    alert(`Gracias por tu compra. El precio total es $${total.toFixed(2)}.`);
}

// Llama a la función para comenzar la compra
compra();
*/

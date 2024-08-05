let nombre;

function pedirNombre() {
    while (!nombre) {
        nombre = prompt("Bienvenido a nuestra tienda. Por favor ingrese su nombre").toLowerCase();
        if (nombre.length < 3 || nombre.length > 20) {
            alert("Nombre invalido. Por favor ingrese un nombre con un mínimo de 3 letras y máximo de 20");
            nombre = null;
        }
    }

    const diasConDescuento10 = ['lunes', 'miércoles', 'viernes'];
    const diasConDescuento5 = ['sábado', 'domingo'];
    alert(`${nombre}, queremos informarle que los días ${diasConDescuento10.join(', ')} tenemos un 10% de descuento y los días ${diasConDescuento5.join(', ')} tenemos un 5% de descuento en el total de la compra.`);
}

pedirNombre();

const panqueques = [
    { nombre: "Panqueque Simple", precio: 1000 },
    { nombre: "Panqueque con dulce de leche", precio: 2000 },
    { nombre: "Panqueque con frutilla y crema", precio: 2500 },
    { nombre: "Panqueque de banana", precio: 2500 },
    { nombre: "Panqueque Salado", precio: 3000 },
    { nombre: "Panqueque Especial", precio: 4000 },
];

let compraTotal = 0;
let ahorroTotal = 0;

function obtenerDescuento() {
    const diasConDescuento10 = [1, 3, 5];
    const diasConDescuento5 = [6, 0]; 
    const hoy = new Date().getDay();

    if (diasConDescuento10.includes(hoy)) {
        return Math.round(0.10 * 100) / 100; 
    } else if (diasConDescuento5.includes(hoy)) {
        return Math.round(0.05 * 100) / 100; 
    }
    return 0;
}

function mostrarPanqueques() {
    let mensaje = `${nombre}, ¿qué panqueque desearías pedir? (Seleccione un número del 1 al ${panqueques.length})\n`;
    panqueques.forEach((panqueque, index) => {
        mensaje += `${index + 1}. ${panqueque.nombre} - $${panqueque.precio}\n`;
    });
    return mensaje;
}

function pedido() {
    let agregar;
    const descuento = obtenerDescuento();
    do {
        let Panqueque;
        let elecciónPanqueque;

        while (!elecciónPanqueque) {
            Panqueque = prompt(mostrarPanqueques());

            const índice = parseInt(Panqueque) - 1;
            if (índice >= 0 && índice < panqueques.length) {
                elecciónPanqueque = panqueques[índice];
                alert(`${nombre} seleccionaste un ${elecciónPanqueque.nombre}.`);
            } else {
                alert("Número de panqueque incorrecto");
            }
        }

        if (elecciónPanqueque) {
            let precioFinal = Math.round(elecciónPanqueque.precio * (1 - descuento));
            let ahorro = Math.round(elecciónPanqueque.precio * descuento);
            compraTotal += precioFinal; 
            ahorroTotal += ahorro;
            alert(`El valor del panqueque con descuento es: $${precioFinal.toFixed(2)}. Has ahorrado: $${ahorro.toFixed(2)}`);
        }

        do {
            agregar = prompt("¿Desearías agregar algo más? Si o No").toLowerCase();
            if (agregar !== "si" && agregar !== "no") {
                alert("Respuesta inválida. Por favor ingrese 'si' o 'no'.");
            }
        } while (agregar !== "si" && agregar !== "no");

    } while (agregar === "si");

    alert(`Muchas gracias por su compra, el precio final es: $${compraTotal.toFixed(2)}. Has ahorrado un total de: $${ahorroTotal.toFixed(2)} con un descuento del ${(descuento * 100).toFixed(0)}%.`);
}

pedido();

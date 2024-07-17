let nombre;

function pedirNombre() {
    while (!nombre) {
        nombre = prompt("Bienvenido a nuestra tienda. Por favor ingrese su nombre").toLowerCase();
        if (nombre.length < 3 || nombre.length > 20) {alert("Nombre invalido. Por favor ingrese un nombre con un mínimo de 3 letras y máximo de 20");
        nombre = null;
        }
    }
}

pedirNombre();

const valor = {
    1: 1000,
    2: 2000,
    3: 2500,
    4: 2500,
    5: 3000,
    6: 4000,
};

let compraTotal = 0;

function pedido() {
    let agregar;
    do {
        
        let Panqueque;
        let elecciónPanqueque;

        while (!elecciónPanqueque){

            Panqueque = prompt(nombre + " que panqueque desearías pedir?(Seleccione un numero del 1 al 6) \n1.Panqueque.  \n2.Panqueque con dulce de leche. \n3. Panqueque con frutilla y crema \n4. Panqueque de banana \n5. Panqueque Salado \n6. Panqueque Especial ");

        switch (Panqueque) {

            case "1":
                elecciónPanqueque = [1];
                alert(nombre + " seleccionaste un panqueque Simple.");
                break;

            case "2":
                elecciónPanqueque = [2];
                alert(nombre + " seleccionaste un panqueque con dulce de leche.");
                break;

            case "3":
                elecciónPanqueque = [3];
                alert(nombre + " seleccionaste un panqueque con frutilla y crema.");
                break;

            case "4":
                elecciónPanqueque = [4];
                alert(nombre + " seleccionaste un panqueque de banana.");
                break;
            case "5":
                elecciónPanqueque = [5];
                alert(nombre + " seleccionaste un panqueque salado.");
                break;
            case "6":
                elecciónPanqueque = [6];
                alert(nombre + " seleccionaste un panqueque especial.");
                break;
            default:
                alert("Numero de panqueque incorrecto");
        }
    }

        if (elecciónPanqueque) {
            compraTotal += valor[elecciónPanqueque];
            alert(" El valor total es : $" + valor[elecciónPanqueque]);
        }

        agregar = prompt("Desearía agregar algo mas? Si o No").toLowerCase();
    
    } while (agregar === "si");

    alert("Muchas gracias por su compra, el precio final es : $" + compraTotal);
}
pedido();
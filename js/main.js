    const contenedorCartas = document.querySelector('#carr');
    const categorias = document.querySelectorAll('.categoria');
    const carritoIcono = document.querySelector("#carritoIcono");
    const pestanaCarrito = document.querySelector("#pestanaCarrito");
    const cerrarCarrito = document.querySelector("#cerrarCarrito");
    const carritoVacio = document.querySelector("#carrito-vacio");
    const carritoContenido = document.querySelector("#carrito-contenido");
    const precioTotalElement = document.querySelector("#precio-total");
    const finalizarCompraButton = document.querySelector("#finalizar-compra");
    const vaciarCarritoButton = document.querySelector("#vaciar-carrito");
    const carritoCantidad = document.querySelector("#carrito-cantidad");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function actualizarCarrito() {
        carritoContenido.innerHTML = "";

        carrito.forEach((producto, index) => {
            let contenido = document.createElement("div");
            contenido.className = "item-carrito";
            const precioProducto = producto.precio * producto.cantidad;
            contenido.innerHTML = `
                <img src="${producto.img}" class="carrito-img">
                <h3 class="carrito-titulo">${producto.titulo}</h3>
                <p class="carrito-precio">Precio: ${precioProducto}$ Cantidad: ${producto.cantidad}</p>
                <button class="boton-mas" data-index="${index}">+</button>
                <button class="boton-menos" data-index="${index}">-</button>`;

            carritoContenido.append(contenido);

            const botonMas = contenido.querySelector(".boton-mas");
            const botonMenos = contenido.querySelector(".boton-menos");

            botonMas.addEventListener("click", () => {
                producto.cantidad++;
                actualizarCarrito();
            });

            botonMenos.addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                } else {
                    carrito.splice(index, 1);
                }
                actualizarCarrito();
            });
        });

        const precioTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
        precioTotalElement.innerText = `Precio total: $${precioTotal}`;

        carritoVacio.style.display = carrito.length === 0 ? "block" : "none";
        carritoContenido.style.display = carrito.length === 0 ? "none" : "block";

        finalizarCompraButton.style.display = precioTotal > 0 ? "block" : "none";
        vaciarCarritoButton.style.display = precioTotal > 0 ? "block" : "none";
        precioTotalElement.style.display = precioTotal > 0 ? "block" : "none";

        localStorage.setItem("carrito", JSON.stringify(carrito));

        const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        carritoCantidad.innerText = cantidadTotal;
        carritoCantidad.style.display = pestanaCarrito.classList.contains("pestana-carrito-mostrar") ? "none" : "inline";
    }

    function mostrarProductos(categoriaSeleccionada) {
        contenedorCartas.innerHTML = productos
            .filter(producto => categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada)
            .map(producto => `
                <div class="Carta">
                    <img src="${producto.img}" class="Imagen-carta" alt="${producto.titulo}">
                    <h2 class="Titulo-carta">${producto.titulo}</h2>
                    <p class="Precio-carta">${producto.precio}$</p>
                    <button class="Boton-carta" data-titulo="${producto.titulo}">Comprar</button>
                </div>
            `)
            .join('');

        document.querySelectorAll(".Boton-carta").forEach(boton => {
            boton.addEventListener("click", () => {
                const titulo = boton.getAttribute("data-titulo");
                const producto = productos.find(p => p.titulo === titulo);
                const productoEnCarrito = carrito.find((item) => item.titulo === producto.titulo);
                if (productoEnCarrito) {
                    productoEnCarrito.cantidad++;
                } else {
                    carrito.push({ ...producto, cantidad: 1 });
                }
                actualizarCarrito();
            });
        });
    }

    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            const categoriaSeleccionada = categoria.getAttribute('data-categoria');
            mostrarProductos(categoriaSeleccionada);
        });
    });

    carritoIcono.addEventListener("click", () => {
        pestanaCarrito.classList.toggle("pestana-carrito-mostrar");
        carritoCantidad.style.display = pestanaCarrito.classList.contains("pestana-carrito-mostrar") ? "none" : "inline";
    });

    cerrarCarrito.addEventListener("click", () => {
        pestanaCarrito.classList.remove("pestana-carrito-mostrar");
        carritoCantidad.style.display = "inline";
    });

    finalizarCompraButton.addEventListener("click", () => {
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarCarrito();
    });

    vaciarCarritoButton.addEventListener("click", () => {
        carrito = [];
        actualizarCarrito();
    });

    actualizarCarrito();
    mostrarProductos('todos');
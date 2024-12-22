const productos = [
  {
    nombre: "Cepillo Nice Carda",
    descripcion:
      "Excelente cepillo para tu mascota, cerdas plásticas, liviano, mango ergonómico.",
    imagen: "productos/cepillo1.png",
    precio: 12500,
  },
  {
    nombre: "Colchón para mascota Feandre",
    descripcion:
      "Colchón para tu mascota, cómodo, hecha de un material super suave y acogedor.",
    imagen: "productos/colchon1.png",
    precio: 26800,
  },
  {
    nombre: "Collar para felinos TakPet",
    descripcion: "Collar para gatos con adornos decorativos y cascabel.",
    imagen: "productos/collar1.png",
    precio: 8900,
  },
  {
    nombre: "Comedero metálico BP",
    descripcion: "Plato de acero inoxidable, modelos variados.",
    imagen: "productos/comedero1.png",
    precio: 7200,
  },
  {
    nombre: "Alimento Cat Chow Nutriplus",
    descripcion: "Bolsa de alimento por 7.5 kg.",
    imagen: "productos/catchow1.png",
    precio: 37200,
  },
  {
    nombre: "Cat Chow Adulto Pescado Y Pollo",
    descripcion: "Bolsa de alimento por 20 kg.",
    imagen: "productos/catchow2.png",
    precio: 62200,
  },
  {
    nombre: "Alimento Pedigree",
    descripcion: "Bolsa de alimento por 4 kg para cachorros.",
    imagen: "productos/pedigree3.png",
    precio: 10200,
  },
  {
    nombre: "Alimento Raza",
    descripcion: "Bolsa de alimento por 1.5 kg para razas pequeñas.",
    imagen: "productos/razap2.png",
    precio: 3500,
  },
];

let productosTienda = "";

for (let i = 0; i < productos.length; i++) {

  productosTienda += `
                <div class="productos">
                    <img src=${productos[i].imagen}>
                    <p class="titTarjeta">${productos[i].nombre}</p>
                    <p class="descripProd">${productos[i].descripcion}</p>
                    <p class="precioProd">$ ${productos[i].precio}</p>
                    <div>
                        <input class="btnCarrito" type="button" value="Añadir al Carrito ">
                        <i class="fa-solid fa-cart-arrow-down"></i>
                    </div>
                </div>
`;
}

const nuestraTienda = document.getElementById("nuestraTienda");

nuestraTienda.innerHTML = productosTienda;

const botonesAgregar = document.querySelectorAll(".btnCarrito");

const listaCarrito = document.querySelector("#listadoDeCompras");

const totalCarrito = document.querySelector("#suCarrito p");

const carritoVacio = document.getElementById("mensajeVacio");

let totalAPagar = 0;

for (let i = 0; i < botonesAgregar.length; i++) {

  function agregarAlCarrito() {

    const productosLi = document.createElement("li");

    productosLi.innerText = `Eligió ${productos[i].nombre} $ ${productos[i].precio}`;

    listaCarrito.appendChild(productosLi);

    totalAPagar += productos[i].precio;

    totalCarrito.innerText = "Su Total a Pagar: $ " + totalAPagar;

    carritoVacio.innerText = "";
  }

  botonesAgregar[i].addEventListener("click", agregarAlCarrito);
}

const botonLimpiar = document.querySelector("#btnLimpiar");

function limpiarCarrito() {

  listaCarrito.innerHTML = "";

  totalCarrito.innerHTML = "Su Total a Pagar: $ 0";

  totalAPagar = 0;

  carritoVacio.innerText = "";
}

botonLimpiar.addEventListener("click", limpiarCarrito);

const botonAPagar = document.querySelector("#btnIrAPagar");

function irAPagar() {

  if (listaCarrito.innerText === "") {

    carritoVacio.innerText = "¡Tu Carrito está Vacío!";

  } else {

    window.location.href = "./pagos.html";
  }
}

botonAPagar.addEventListener("click", irAPagar);

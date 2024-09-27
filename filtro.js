// Arreglo de productos, cada objeto contiene nombre, tipo, color e imagen del producto.
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Seleccionamos el contenedor donde se mostrarán los productos
// Cambio: Usé getElementById en lugar de getElementsByName para seleccionar correctamente el contenedor
const listaDeProductos = document.getElementById("lista-de-productos");

// Seleccionamos el input de búsqueda usando su id
const inputBusqueda = document.getElementById("input-busqueda");

// Seleccionamos el botón de filtrar usando su id
const botonDeFiltro = document.getElementById("btn-filtrar");

// Función que despliega los productos en la página
// Cambio: Encapsulé la lógica de renderizar los productos en una función para evitar duplicar código
function displayProductos(productos) {
  // Limpiamos la lista de productos antes de mostrar los nuevos resultados
  // Cambio: Utilizo innerHTML = "" para limpiar el contenedor de productos de forma eficiente
  listaDeProductos.innerHTML = "";

  // Iteramos sobre el arreglo de productos y generamos el HTML correspondiente
  productos.forEach(producto => {
    // Creamos un div contenedor para cada producto
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    // Creamos un párrafo para el nombre del producto
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    // Creamos la imagen del producto
    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    // Añadimos el nombre y la imagen al contenedor del producto
    productoDiv.appendChild(titulo);
    productoDiv.appendChild(imagen);

    // Añadimos el producto al contenedor principal
    listaDeProductos.appendChild(productoDiv);
  });
}

// Mostramos todos los productos al cargar la página
// Cambio: Llamamos a la función displayProductos una vez para mostrar todos los productos al inicio
displayProductos(productos);

// Evento que se activa cuando el usuario presiona el botón "Filtrar"
botonDeFiltro.onclick = function() {
  // Obtenemos el texto ingresado en el input
  // Cambio: Convertimos el texto a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
  const texto = inputBusqueda.value.toLowerCase();

  // Filtramos los productos según el texto ingresado
  const productosFiltrados = filtrado(productos, texto);

  // Mostramos los productos filtrados
  displayProductos(productosFiltrados);
}

// Función que filtra los productos según el tipo o el color
const filtrado = (productos, texto) => {
  // Cambio: Convertimos el tipo y color de cada producto a minúsculas para que el filtro sea case-insensitive
  return productos.filter(producto => 
    producto.tipo.toLowerCase().includes(texto) || 
    producto.color.toLowerCase().includes(texto)
  );
};

const whatsappNumber = "56930767776";

// =====================================
// LO QUE TENEMOS HOY (EDITABLE)
// =====================================
const hoy = [
  { nombre: "Cupcakes de Vainilla" },
  { nombre: "Brownies de Chocolate" },
  { nombre: "Alfajores de Maicena" }
];

// =====================================
// TORTAS (EDITABLE)
// NOMBRES DE ARCHIVOS RECOMENDADOS:
// torta1.jpg, torta2.jpg, torta3.jpg...
// =====================================
const tortas = [
  { nombre: "Torta Chocolate", imagen: "img/torta1.jpg" },
  { nombre: "Torta Frutilla", imagen: "img/torta2.jpg" },
  { nombre: "Torta Tres Leches", imagen: "img/torta3.jpg" },
  { nombre: "Torta Red Velvet", imagen: "img/torta4.jpg" }
];

// =====================================
// COCTEL (EDITABLE)
// NOMBRES DE ARCHIVOS RECOMENDADOS:
// coctel1.jpg, coctel2.jpg, coctel3.jpg...
// =====================================
const coctel = [
  { nombre: "Canapés surtidos", imagen: "img/coctel1.jpg" },
  { nombre: "Empanaditas", imagen: "img/coctel2.jpg" },
  { nombre: "Tapaditos", imagen: "img/coctel3.jpg" },
  { nombre: "Bocadillos dulces", imagen: "img/coctel4.jpg" }
];


// =====================================
// RENDER HOY
// =====================================
function renderHoy() {
  const todayContainer = document.getElementById("today-products");
  todayContainer.innerHTML = "";

  hoy.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("today-item");

    div.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Disponible hoy 💜</p>
    `;

    todayContainer.appendChild(div);
  });
}

renderHoy();


// =====================================
// FUNCIÓN PARA RENDER PRODUCTOS
// =====================================
function renderProductos(lista, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  lista.forEach(producto => {
    const mensaje = `Hola 😊 Quiero pedir: ${producto.nombre} en Tu Dulce Placer`;
    const linkWsp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="card-content">
        <h3>${producto.nombre}</h3>
        <a class="order-btn" target="_blank" href="${linkWsp}">
          Pedir por WhatsApp 💬
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}


// =====================================
// RENDER SECCIONES
// =====================================
renderProductos(tortas, "tortas-list");
renderProductos(coctel, "coctel-list");


// =====================================
// BUSCADOR GENERAL (tortas + coctel)
// =====================================
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const texto = searchInput.value.toLowerCase();

  const todo = [...tortas, ...coctel];

  const filtrado = todo.filter(producto =>
    producto.nombre.toLowerCase().includes(texto)
  );

  // mostrar resultados en ambas secciones
  renderProductos(
    filtrado.filter(p => p.imagen.includes("torta")),
    "tortas-list"
  );

  renderProductos(
    filtrado.filter(p => p.imagen.includes("coctel")),
    "coctel-list"
  );
});

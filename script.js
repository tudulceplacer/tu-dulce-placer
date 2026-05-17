const whatsappNumber = "56930767776";

// =====================================
// LO QUE TENEMOS HOY (EDITABLE)
// =====================================
const hoy = [
  { nombre: "Cupcakes de Vainilla" },
  { nombre: "Brownies de Chocolate" },
  { nombre: "Alfajores Artesanales" }
];

// =====================================
// TORTAS (6)
// =====================================
const tortas = [
  { nombre: "Torta 1", imagen: "img/torta1.jpg" },
  { nombre: "Torta 2", imagen: "img/torta2.jpg" },
  { nombre: "Torta 3", imagen: "img/torta3.jpg" },
  { nombre: "Torta 4", imagen: "img/torta4.jpg" },
  { nombre: "Torta 5", imagen: "img/torta5.jpg" },
  { nombre: "Torta 6", imagen: "img/torta6.jpg" }
];

// =====================================
// COCTEL (6)
// =====================================
const coctel = [
  { nombre: "Cóctel 1", imagen: "img/coctel1.jpg" },
  { nombre: "Cóctel 2", imagen: "img/coctel2.jpg" },
  { nombre: "Cóctel 3", imagen: "img/coctel3.jpg" },
  { nombre: "Cóctel 4", imagen: "img/coctel4.jpg" },
  { nombre: "Cóctel 5", imagen: "img/coctel5.jpg" },
  { nombre: "Cóctel 6", imagen: "img/coctel6.jpg" }
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

  renderProductos(
    filtrado.filter(p => p.imagen.includes("torta")),
    "tortas-list"
  );

  renderProductos(
    filtrado.filter(p => p.imagen.includes("coctel")),
    "coctel-list"
  );
});

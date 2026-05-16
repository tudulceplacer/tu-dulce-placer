const whatsappNumber = "56930767776";

// ============================
// CATÁLOGO GENERAL
// ============================
const catalogo = [
  {
    nombre: "Torta de Chocolate",
    precio: "$12.000",
    imagen: "img/producto1.jpg"
  },
  {
    nombre: "Cupcakes Decorados",
    precio: "$2.500 c/u",
    imagen: "img/producto2.jpg"
  },
  {
    nombre: "Alfajores Artesanales",
    precio: "$3.000",
    imagen: "img/producto3.jpg"
  },
  {
    nombre: "Brownies",
    precio: "$4.000",
    imagen: "img/producto4.jpg"
  },
  {
    nombre: "Kuchen Frutal",
    precio: "$8.000",
    imagen: "img/producto5.jpg"
  },
  {
    nombre: "Torta Tres Leches",
    precio: "$14.000",
    imagen: "img/producto6.jpg"
  },
  {
    nombre: "Torta Red Velvet",
    precio: "$15.000",
    imagen: "img/producto7.jpg"
  }
];

// ============================
// LO QUE TENEMOS HOY
// (EDITABLE)
// ============================
const hoy = [
  { nombre: "Cupcakes de Vainilla", precio: "$2.500 c/u" },
  { nombre: "Brownies de Chocolate", precio: "$4.000" },
  { nombre: "Alfajores de Maicena", precio: "$3.000" }
];


// ==========================
// RENDER HOY
// ==========================
const todayContainer = document.getElementById("today-products");

hoy.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("today-item");

  div.innerHTML = `
    <h3>${item.nombre}</h3>
    <p>${item.precio}</p>
  `;

  todayContainer.appendChild(div);
});


// ==========================
// RENDER CATÁLOGO
// ==========================
const catalogContainer = document.getElementById("product-list");

catalogo.forEach(producto => {
  const mensaje = `Hola 😊 Quiero pedir: ${producto.nombre} (${producto.precio}) en Tu Dulce Placer`;
  const linkWsp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <div class="card-content">
      <h3>${producto.nombre}</h3>
      <p class="price">${producto.precio}</p>
      <a class="order-btn" target="_blank" href="${linkWsp}">
        Pedir por WhatsApp 💬
      </a>
    </div>
  `;

  catalogContainer.appendChild(card);
});
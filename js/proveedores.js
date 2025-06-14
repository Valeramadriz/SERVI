// Datos simulados de proveedores
const proveedores = [
    {
      nombre: "María González",
      rubro: "Electricista",
      calificacion: 4.5,
      imagen: "assets/img/imagenes/abogados 3.jpg"
    },
    {
      nombre: "Carlos Méndez",
      rubro: "Plomero",
      calificacion: 4.8,
      imagen: "assets/img/imagenes/electricista.jpg"
    },
    {
      nombre: "Laura Sánchez",
      rubro: "Pintora de interiores",
      calificacion: 4.3,
      imagen: "assets/img/imagenes/entrenador.webp"
    }
  ];
  
  // Función para generar las tarjetas
  function cargarProveedores() {
    const contenedor = document.getElementById("proveedores-container");
  
    proveedores.forEach(proveedor => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-proveedor";
  
      tarjeta.innerHTML = `
        <img src="${proveedor.imagen}" alt="${proveedor.nombre}" />
        <h3 class="mb-1">${proveedor.nombre}</h3>
        <p class="text-muted mb-1">${proveedor.rubro}</p>
        <p class="mb-1 text-warning">
          ${"★".repeat(Math.floor(proveedor.calificacion))}<span class="text-secondary">${"☆".repeat(5 - Math.floor(proveedor.calificacion))}</span>
          <small>(${proveedor.calificacion})</small>
        </p>
        <a href="#" class="btn btn-sm btn-outline-primary mt-2">Ver más</a>
      `;

  
      contenedor.appendChild(tarjeta);
    });
  }
  
  document.addEventListener("DOMContentLoaded", cargarProveedores);
  
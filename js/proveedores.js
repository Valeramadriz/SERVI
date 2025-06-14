// Datos simulados de proveedores
const proveedores = [
    {
      nombre: "María González",
      rubro: "Electricista",
      calificacion: 4.5,
      imagen: "assets/proveedor1.jpg"
    },
    {
      nombre: "Carlos Méndez",
      rubro: "Plomero",
      calificacion: 4.8,
      imagen: "assets/proveedor2.jpg"
    },
    {
      nombre: "Laura Sánchez",
      rubro: "Pintora de interiores",
      calificacion: 4.3,
      imagen: "assets/proveedor3.jpg"
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
        <h3>${proveedor.nombre}</h3>
        <p><strong>Rubro:</strong> ${proveedor.rubro}</p>
        <p><strong>Calificación:</strong> ⭐ ${proveedor.calificacion}</p>
      `;
  
      contenedor.appendChild(tarjeta);
    });
  }
  
  document.addEventListener("DOMContentLoaded", cargarProveedores);
  
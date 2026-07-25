window.onload = function() {
  const overlay = document.getElementById("overlay");
  const contenido = document.getElementById("contenido");

  // Después de 2 segundos, ocultar overlay y mostrar contenido
  setTimeout(() => {
    overlay.style.opacity = "0"; // transición de desvanecimiento
    setTimeout(() => {
      overlay.style.display = "none"; // quitar overlay
      contenido.classList.remove("oculto"); // mostrar contenido
    }, 2000); // esperar a que termine la transición de 2 segundos
  }, 2000);
};

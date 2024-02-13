function changePage() {
  // Obtener el nombre ingresado
  const nombre = document.getElementById('name').value;

  // Mostrar el estado de espera
  document.getElementById('estadoEspera').style.display = 'block';

  // Simular algún proceso de espera (puedes agregar lógica adicional aquí)

  // Después de un tiempo (simulado con setTimeout), cambia la página
  setTimeout(function() {
      // Ocultar el estado de espera
      document.getElementById('estadoEspera').style.display = 'none';

      // Guardar el nombre en el almacenamiento local
      localStorage.setItem('name', nombre);

      // Cambiar a la siguiente página
      window.location.href = '/page/nameflower.html';
  }, 2000); // Espera 2 segundos (puedes ajustar según tus necesidades)
}
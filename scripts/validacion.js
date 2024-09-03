document.getElementById('imagen').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('mascotaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validación de los campos
    const imagen = document.getElementById('imagen').files[0];
    const nombre = document.getElementById('nombre').value;
    const color = document.getElementById('color').value;
    const especie = document.getElementById('especie').value;
    const sexo = document.getElementById('sexo').value;
    const edad = document.getElementById('edad').value;

    if (!imagen || !nombre || !color || !especie || !sexo || !edad) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto con los datos
    const mascota = {
        imagen: URL.createObjectURL(imagen),
        nombre: nombre,
        color: color,
        especie: especie,
        sexo: sexo,
        edad: edad
    };

    // Almacenar los datos en localStorage
    localStorage.setItem('mascota', JSON.stringify(mascota));

    alert('Datos guardados correctamente.');
});
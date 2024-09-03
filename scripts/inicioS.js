document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Almacenar los datos en localStorage
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginPassword', password);

    // Redirigir a la página de destino
    window.location.href = 'cuenta.html';
});
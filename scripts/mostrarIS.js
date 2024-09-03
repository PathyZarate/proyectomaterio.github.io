// Recuperar los datos de localStorage
const email = localStorage.getItem('loginEmail');
const password = localStorage.getItem('loginPassword');

// Mostrar los datos en la página
document.getElementById('email').textContent = 'Correo electrónico: ' + email;
document.getElementById('password').textContent = 'Contraseña: ' + password;
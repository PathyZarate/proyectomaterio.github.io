document.addEventListener('DOMContentLoaded', () => {
    const botonCuenta = document.getElementById('botoncuenta');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModal = document.getElementById('close-modal');
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');

    function abrirModal() {
        modalOverlay.style.display = 'flex';
    }
    function cerrarModal() {
        modalOverlay.style.display = 'none';
        registerModal.style.display = 'none';
        loginModal.style.display = 'none';
    }

    botonCuenta.addEventListener('click', abrirModal);
    closeModal.addEventListener('click', cerrarModal);
    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            cerrarModal();
        }
    });

    document.getElementById('register-button').addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        registerModal.style.display = 'flex';
    });

    document.getElementById('login-button').addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        loginModal.style.display = 'flex';
    });

    document.getElementById('close-register-modal').addEventListener('click', () => {
        registerModal.style.display = 'none';
        modalOverlay.style.display = 'flex';
    });

    document.getElementById('close-login-modal').addEventListener('click', () => {
        loginModal.style.display = 'none';
        modalOverlay.style.display = 'flex';
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            alert('La contraseña debe contener al menos una letra mayúscula y un número.');
            return;
        }
        alert('Registro exitoso.');
        cerrarModal();
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inicio de sesión exitoso.');
        cerrarModal();
    });
});

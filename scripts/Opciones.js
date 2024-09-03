document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.desplegable-menu').forEach(function(menu) {
        menu.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    var isClickInsideMenu = event.target.closest('.iconodesplegable');

    document.querySelectorAll('.desplegable-menu').forEach(function(menu) {
        if (!isClickInsideMenu || !isClickInsideMenu.contains(menu)) {
            menu.style.display = 'none';
        }
    });
});

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    var isDisplayed = menu.style.display === "block";
    
    document.querySelectorAll('.desplegable-menu').forEach(function(menu) {
        menu.style.display = "none";
    });
    
    if (!isDisplayed) {
        menu.style.display = "block";
    }
}

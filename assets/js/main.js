function myFunction() {
    document.getElementById("menu-drop").classList.toggle("menu-active");
}

window.onclick = function (e) {
    if (!e.target.matches('.drop-item')) {
        var myDropdown = document.getElementById("menu-drop");
        if (myDropdown.classList.contains('menu-active')) {
            myDropdown.classList.remove('menu-active');
        }
    }
}

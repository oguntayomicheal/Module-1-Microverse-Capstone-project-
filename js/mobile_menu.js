function mobileMenu (){
    let headerDisplay = document.getElementById("header")
    var menu = document.getElementById("menu")
    if (menu.style.display === "block"){
        menu.style.display = "none";
        headerDisplay.style.display = "block";
    } else {
        menu.style.display = "block";
        headerDisplay.style.display = "none";
    }
}
document.getElementById("menu_icon").addEventListener('click', mobileMenu);

document.getElementById("close_icon").addEventListener('click', mobileMenu);

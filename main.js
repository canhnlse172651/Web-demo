let $menu = document.querySelector("header .menu");


let $nav = document.querySelector("header .nav");





function showMenu(){
    
    $menu.classList.toggle("active")
    $nav.classList.toggle("active")
}

$menu.addEventListener("click", showMenu)


function setupBurgerMenu() {
    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");
    //console.log(sidenav)
    //console.log(openBtn)
    //console.log(closeBtn)

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        sidenav.classList.add("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        sidenav.classList.remove("active");

    }
}

function closeNav2(){
    var sidenav = document.getElementById("mySidenav");
    sidenav.classList.remove("active");
}

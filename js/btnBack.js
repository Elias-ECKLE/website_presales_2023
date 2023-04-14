const btn = document.querySelector('.movetop-btn');



btn.addEventListener('click',()=>{

    window.scrollTo({
        top:0,
        left:0,
        behavior : "smooth"
    })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(window.scrollY);
    if (window.scrollY > window.innerWidth*3) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


var btnDecouvrez = document.getElementById("btnDecouvrez");

console.log(btnDecouvrez);

btnDecouvrez.addEventListener('click',()=>{
    document.getElementById('programmation').scrollIntoView({
        behavior: 'smooth'
    });
})


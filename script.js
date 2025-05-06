let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

function copiar() {
    text.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    var link = document.getElementById("link");
    link.textContent = "Texto copiado";
    setTimeout(function () {
        link.textContent = "Clique para copiar";
    }, 3000);
}
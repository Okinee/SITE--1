function ForaDoAr(){
    alert("Essa opção não esta funcionando no momento")
}

url === contato.html

function AbrirContatos(){
    window.open("contato.html", '_blank')
}

function SobreMais(){
    window.open("Sobre.html", '_self')
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('.container1')
    header.classList.toggle('rolagem' , window.scrollY>100)
})
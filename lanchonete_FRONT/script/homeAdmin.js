const menuHamburguer = document.querySelector('#navBar');
const buttonHamburguer = document.querySelector('#ativarMenuHamburguer');
const menuPerfilPersonatxt = document.querySelector('#menu-perfil-persona-texto')
const menuPerfilPersonaicon = document.querySelector('#menu-perfil-persona')

function ativarMenuHamburguer(){
    if(menuHamburguer.classList.contains('nav-bar')){
        menuHamburguer.classList.remove('nav-bar');
        menuHamburguer.classList.add('nav-bar-inative');
    }else if(menuHamburguer.classList.contains('nav-bar-inative')){
        menuHamburguer.classList.remove('nav-bar-inative');
        menuHamburguer.classList.add('nav-bar');
    }
}

menuPerfilPersonatxt.addEventListener("click", function(){
    alert('OPS! Não é possivel editar seu usuário')
}) 

menuPerfilPersonaicon.addEventListener("click", function(){
    alert('OPS! Não é possivel editar sua foto')
}) 
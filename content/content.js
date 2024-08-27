// função para abrir o menu
function openMenu() {
    const menu = document.getElementById('menu');
    // para dizer que o menu está aberto adicionamos a
    // classe de estilo active
    menu.classList.add('active');
    document.getElementById('logo').style.visibility= 'hidden'
}

// função para fechar o menu
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active')
    document.getElementById('logo').style.visibility = 'visible'
}
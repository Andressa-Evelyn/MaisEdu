// função para abrir o menu
function openMenu() {
    const menu = document.getElementById('menu');
    // para dizer que o menu está aberto adicionamos a
    // classe de estilo active
    menu.classList.add('active');
}

// função para fechar o menu
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active')
}

//função passar info do sucess
let index = 1;
showSlides(index);

function showSlides(n){
    const slides = document.querySelectorAll('.number');

    if(n > slides.length){ index = 1}
    if(n < 1){index = slides.length}

    slides.forEach((slide,i) => {
        slide.style.transform = `translateX(${-100 * (index - 1)}%)`
    }
    )
}

    function nextSlide(){
        showSlides(index += 1);
    }

    function prevSlide(){
        showSlides(index -= 1);
    }

    
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

function nextSlide(){
    swiper.slideNext(3000)
}

function prevSlide(){
    swiper.slidePrev(3000)
}

var swiper = new Swiper(".slide_container", {
    slidesPerView: 1,
    spaceBetween: 20,
    sliderPerGroup: 1,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
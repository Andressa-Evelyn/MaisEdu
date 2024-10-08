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

  let index = 1;
  showSlides(index);
  
  // Função para mostrar os slides
  function showSlides(n) {
      const slides = document.querySelectorAll('.number');
  
      if (n > slides.length) { 
          index = 1; 
      }
      if (n < 1) { 
          index = slides.length; 
      }
  
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${-100 * (index - 1)}%)`;
          slide.style.transition = 'transform 0.5s ease-in-out';
      });
  }
  
  // Funções para os botões de navegação
  function nextSlide() {
      showSlides(index += 1);
  }
  
  function prevSlide() {
      showSlides(index -= 1);
  }

  

  
const home = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
const swiper = new Swiper('.swiper', {
   loop: true,
    autoplay: {
    delay: 3000,  
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})


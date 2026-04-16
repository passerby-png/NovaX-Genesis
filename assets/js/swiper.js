var sliderinit = function () {
  // basic options for all sliders

  let defaults = {
    spaceBetween: 30,
    slidesPerView: 1,
  };
  // call init function
  initSwipers(defaults);
  function initSwipers(defaults = {}, selector = ".swiper-container") {
    let swipers = document.querySelectorAll(selector);
    swipers.forEach((swiper) => {
      // get options
      let optionsData = swiper.dataset.swiper
        ? JSON.parse(swiper.dataset.swiper)
        : {};
        // 自动播放
      let options = {
        ...defaults,  // 自动播放
        ...optionsData,
      };
      // init
      new Swiper(swiper, options);
    });
  }
};
sliderinit();

var swiper = new Swiper(".swiper-3d-7", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 3000, // 3秒切换一次
    disableOnInteraction: false, // 即使用户交互后也继续自动轮播
  },
  watchSlidesProgress: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 15,
    stretch: 90,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".prev-3d",
    prevEl: ".next-3d",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".slider-3d", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  freeMode: true,
  watchSlidesProgress: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 75,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".next-3d",
    prevEl: ".prev-3d",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

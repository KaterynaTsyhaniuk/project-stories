import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const bullets = document.querySelectorAll('.gallery-bullet');

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  on: {
    slideChange: function () {
      const activeBulletIndex = this.realIndex % 3;
      bullets.forEach((bullet, i) => {
        bullet.classList.toggle(
          'gallery-bullet-active',
          i === activeBulletIndex
        );
      });
    },
  },
});

bullets[0].classList.add('gallery-bullet-active');

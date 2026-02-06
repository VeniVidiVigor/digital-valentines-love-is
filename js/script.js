const slides = [
  {
    image: 'images/love-is-1.png',
    text: '...микс чувств!'
  },
  {
    image: 'images/love-is-2.png',
    text: '...чувствовать поддержку!'
  },
  {
    image: 'images/love-is-3.png',
    text: '...дурачиться как дети!'
  },
  {
    image: 'images/love-is-4.png',
    text: '...любоваться друг другом!'
  },
  {
    image: 'images/love-is-5.png',
    text: '...обнимашки!'
  },
  {
    image: 'images/love-is-6.png',
    text: '...когда пробежала искра!'
  }
];

let currentIndex = 0;

const imageElement = document.getElementById('section__slider-image');
const textElement = document.getElementById('section__slider-text');

function showSlide(index) {
  imageElement.classList.remove('show');

  setTimeout(() => {
    imageElement.src = slides[index].image;
    textElement.textContent = slides[index].text;
    imageElement.classList.add('show');
  }, 300);
}

// первый показ
showSlide(currentIndex);

// автопрокрутка каждые 6 секунд
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 6000);
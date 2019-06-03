//스크롤시 header 애니메이션
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const logoLine = document.querySelector('.logo-line')
  const textLogo = document.querySelector('#text-logo');
  if (window.scrollY >= 100) {
    header.classList.add('small-header');
    logoLine.classList.add('hidden');
    textLogo.classList.add('hidden');
  }
  else {
    header.classList.remove('small-header')
    logoLine.classList.remove('hidden');
    textLogo.classList.remove('hidden');
  }
})

//더보기 버튼 클릭시 모달창 토글
const optionBtn = document.querySelectorAll('.main__content_option');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalBackground = document.querySelector('.modal-background');
const modalContent = document.querySelector('.modal-content');

const showModal = () => {
  modalWrapper.classList.toggle('visible-modal');
}

optionBtn.forEach(el => el.addEventListener('click', showModal))

window.addEventListener('click', function(event) {
  if(event.target === modalBackground) showModal();
})

//캐러셀 슬라이드
// const arrowPrev = document.querySelectorAll('.arrow-prev');
// const arrowNext = document.querySelectorAll('.arrow-next');
// const mainImage = document.querySelector('.main-image');
// const carouselWrapper = document.querySelector('.carousel-wrapper');

// let imageWidth = mainImage.offsetWidth;

// const movePrev = () => {
//   carouselWrapper.style.transform = `translateX(${imageWidth}px)`;
// }
// const moveNext = () => {
//   carouselWrapper.style.transform = `translateX(-${imageWidth}px)`;
// }

// arrowPrev.forEach(el => el.addEventListener('click', movePrev))
// arrowNext.forEach(el => el.addEventListener('click', moveNext))
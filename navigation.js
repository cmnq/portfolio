const navSlide = () => {


const burger = document.querySelector('.navigation__burger');
const nav = document.querySelector('.navigation__list');
const navLink = document.querySelectorAll('.navigation__item');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

navLink.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation ='';
    }else {
    link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
}
});

  burger.classList.toggle('toggle');
});

}
navSlide(); 
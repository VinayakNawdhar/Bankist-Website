'use strict';

// Modal Window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector(".header");
const operationTabContainer = document.querySelectorAll('.operations__tab');
const operationTab = document.querySelector('.operations__tab-container');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navbar = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.innerHTML = 'We use cookies for improved functionalities and analytics. <button class="btn btn--close-cookie">Got it! </button>';
header.append(message);
document.querySelector('.btn--close-cookie').addEventListener('click',()=>{
  message.remove();
  // message.parentElement.removeChild(message);
})
message.classList.add('cookie-message');
message.style.backgroundColor = '#37383d';
// message.style.position = 'fixed';
// message.style.position = 'fixed';


btnScrollTo.addEventListener('click',function(){
  section1.scrollIntoView({behavior:'smooth'});
})
const navlinks = document.querySelectorAll('.nav__link');
for(let i=0;i<3;i++){
  navlinks[i].addEventListener('click',function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  })
}
let currentActiveTab = document.querySelector('.operations__tab--active');
//Tabbed Component


operationTab.addEventListener('click',function(e){
  if(e.target.classList.contains('operations__tab')){
    const clicked = e.target.closest('.operations__tab');
    document.querySelector('.operations__content--active').classList.remove('operations__content--active');
    currentActiveTab.classList.remove('operations__tab--active');
    currentActiveTab = clicked;
    currentActiveTab.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${currentActiveTab.getAttribute(`data-tab`)}`).classList.add('operations__content--active');
    
  }
})

//navigation bar animation
const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el !== link){
        el.style.opacity = this;
      }
    });
    logo.style.opacity =this;
  }
};
navbar.addEventListener('mouseover',handleHover.bind(0.5));
navbar.addEventListener('mouseout', handleHover.bind(1));

// sticky navbar
const sec1coords = section1.getBoundingClientRect();
window.addEventListener('scroll',function(e){
  if(this.scrollY > sec1coords.top){
    navbar.classList.add('sticky');
  }else{
    navbar.classList.remove('sticky');
  }
})
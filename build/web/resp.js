burger=document.querySelector('.burger');
navbar=document.querySelector('.header');
navlist=document.querySelector('.container');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-nav-responsive');
    navbar.classList.toggle('h-nav-responsive');
})
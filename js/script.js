const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
});
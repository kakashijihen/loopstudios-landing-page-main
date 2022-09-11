//buttons hamburger
const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

//navbar
const navbarNav = document.querySelector('.navbar_nav');


//function toggle
const navbarToggle=()=>navbarNav.classList.toggle('active');


//toggle on buttons
hamburger.addEventListener('click',navbarToggle);
closeBtn.addEventListener('click',navbarToggle);

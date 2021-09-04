let mobileNav = document.querySelector('.mobile-nav');
let hamburger = document.querySelector('.hamburger');
let cancel = document.querySelector('.cancel').onclick = function Function() {
    mobileNav.classList.remove('open');
};
let home = document.querySelector('.homeBtn').onclick = function Function() {
    mobileNav.classList.remove('open');
};
let about = document.querySelector('.aboutBtn').onclick = function Function() {
    mobileNav.classList.remove('open');
};
let services = document.querySelector('.servicesBtn').onclick = function Function() {
    mobileNav.classList.remove('open');
};
let projects = document.querySelector('.projectsBtn').onclick = function Function() {
    mobileNav.classList.remove('open');
};
let contact = document.querySelector('.contactBtn').onclick = function Function() {
    mobileNav.classList.remove('open');
};

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
});

// cancel.addEventListener('click', function() {
    
// });
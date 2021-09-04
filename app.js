let mobileNav = document.querySelector('.mobile-nav');
let hamburger = document.querySelector('.hamburger');
let cancel = document.querySelector('.cancel');

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
});

cancel.addEventListener('click', function() {
    mobileNav.classList.remove('open');
});
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', 'search');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

//making badges using lodash.js & gsap
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(function, mil.sec)

// Visual images fade in 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7,
        opacity: 1
    });
});

// Slide - Swiper.js
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});


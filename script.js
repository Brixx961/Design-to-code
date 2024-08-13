document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // Auto-play functionality (optional)
    setInterval(() => {
        nextButton.click();
    }, 4000); // Change testimonial every 4 seconds
});

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})




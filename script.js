// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');



// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15
//   })
//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7
//   })
// }

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   })
// }




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

    // Auto-play functionality
    setInterval(() => {
        nextButton.click();
    }, 4000); // Change testimonial every 4 seconds
});

// nav mobile menu toggle animation

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})

// hero section animation

const words = ["AND  BEYOND"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            // Show the blinking cursor after typing
            document.querySelector('.typing-text').innerHTML += '<span class="cursor">|</span>';
            setTimeout(() => {
                document.querySelector('.cursor').style.display = 'none'; // Hide cursor before deleting
                deletingEffect();
            }, 1000); // Wait 1 second before deleting
            return false;
        }
        timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    let loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("") + '<span class="cursor">|</span>';
        } else {
            document.querySelector('.cursor').style.display = 'none'; // Hide cursor before starting next word
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
}

typingEffect();

// CSS for the blinking cursor
const style = document.createElement('style');
style.textContent = `
    .cursor {
        display: inline-block;
        margin-left: 2px;
        opacity: 1;
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

let testSlide = document.querySelectorAll('.testItem');
let dots = document.querySelectorAll('.dot');
let counter = 0;
let slideInterval;

function switchTest(currentTest) {
    testSlide[counter].classList.remove('active');
    dots[counter].classList.remove('active');

    counter = parseInt(currentTest.getAttribute('attr'));

    testSlide[counter].classList.add('active');
    dots[counter].classList.add('active');
}

function slideNext() {
    testSlide[counter].classList.remove('active');
    dots[counter].classList.remove('active');

    counter = (counter + 1) % testSlide.length;

    testSlide[counter].classList.add('active');
    dots[counter].classList.add('active');
}

function slidePrev() {
    testSlide[counter].classList.remove('active');
    dots[counter].classList.remove('active');

    counter = (counter - 1 + testSlide.length) % testSlide.length;

    testSlide[counter].classList.add('active');
    dots[counter].classList.add('active');
}

function autoSliding() {
    slideInterval = setInterval(slideNext, 2000);
}

autoSliding(); // Start auto-sliding

// Pause auto-slide on hover and resume on mouseout
const testimonialContainer = document.querySelector('.testimonial');
testimonialContainer.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});

testimonialContainer.addEventListener('mouseout', autoSliding);

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


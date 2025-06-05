/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');


const linkAction = () => {
    // When clicking on each nav link, we remove the 'show-menu' class
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add blur to header
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is greater than 350 viewport height, add scroll to up button 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('.section[id]');

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            // Get the ID of the section
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link');
            }else{
                sectionsClass.classList.remove('active-link');
            }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 3000, 
        delay: 400,
       //reset: true
    }
)

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image', {origin: 'right'})
sr.reveal('.about__image, .join__data', {origin: 'left'})
sr.reveal('popular__card', {interval: 200})
sr.reveal('.explore__image', {
    origin: 'bottom',
    distance: '80px',
    duration: 2500,
    delay: 500,
    scale: 0.85,        // Zoom effect
    opacity: 0.1,       // Start almost invisible
    easing: 'ease-in-out'
})
sr.reveal('.form__container', { origin: 'bottom', distance: '60px', delay: 400 });


/*=============== HOME BACKGROUND ANIMATION ===============*/
const backgrounds = document.querySelectorAll('.home__bg');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(index) {
    backgrounds.forEach(bg => bg.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    backgrounds[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % backgrounds.length;
    showSlide(current);
  }

  let slideshowInterval = setInterval(nextSlide, 5000); // change every 5s

  // Optional: allow clicking dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideshowInterval);
      current = index;
      showSlide(index);
    });
  });

  // Show the first slide initially
  showSlide(current);

/*=============== COLOR TEXT CHANGE ===============*/
  function showSlide(index) {
    backgrounds.forEach(bg => bg.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
  
    backgrounds[index].classList.add('active');
    dots[index].classList.add('active');
  
    // Change text color class
    const textContainer = document.querySelector('.home__data');
    textContainer.classList.remove('text-dark', 'text-light');
    
    if (backgrounds[index].classList.contains('bg-light')) {
      textContainer.classList.add('text-dark'); // Use dark text
    } else {
      textContainer.classList.add('text-light'); // Use light text
    }
  }
  
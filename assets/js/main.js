/* NAVIGATION BAR FUNCTION */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Close menu when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById("myNavMenu");
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu when a link is clicked
            if (navMenu.classList.contains('responsive')) {
                navMenu.className = "nav-menu";
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenuBtn = document.querySelector('.nav-menu-btn');
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnMenuBtn = navMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && navMenu.classList.contains('responsive')) {
            navMenu.className = "nav-menu";
        }
    });
});
/* NAV BAR SHADOW WHILE SCROLLING */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/* TYPING EFFECT */
var typed = new Typed(".typedText",{
    strings : ["an Engineer", "a Programmer", "a Dabbler"],
    loop : true,
    typeSpeed : 120,
    backSpeed : 120,
    backDelay : 1500
});
/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

/* HOME */
sr.reveal('.featured-text-card',{});
sr.reveal('.featured-name',{delay: 100});
sr.reveal('.featured-text-info',{delay: 100});
sr.reveal('.featured-text-btn',{delay: 100});
sr.reveal('.social_icons',{delay: 100});
sr.reveal('.featured-image',{delay: 150});

/* PROJECT BOX */
sr.reveal('.project-box',{interval: 100});

/* HEADINGS */
sr.reveal('.top-header',{});

/* ABOUT INFO */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
});

srLeft.reveal('.about-info', {delay: 100});
srLeft.reveal('.contact-info', {delay: 100});

/* ABOUT SKILLS & Form Box */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
});

srRight.reveal('.skills-box', {delay: 100}, {interval: 100});
srRight.reveal('.form-control', {delay: 100});
    
/* fade in from bottom */
const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: false
});

srBottom.reveal('.scroll-icon-box',{delay: 300});

/* CHANGE ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionID = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=]' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=]' + sectionID + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

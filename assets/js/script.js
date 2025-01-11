

/* SCROLL REVEAL JS */
window.sr = new ScrollReveal();
sr.reveal('.about-info', {origin: 'right', distance: '400px', duration: 1500, reset: false});


/* NAV BAR JS */
const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    list = document.querySelector(".sidebar-content");

    menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
        });
        list.addEventListener("click", () => {
            navBar.classList.toggle("open");
        })
    });

    


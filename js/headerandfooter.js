
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});



function animateFooterHeadings() {
    function shakeEffect() {
        gsap.to(".footer-section h3", {
            x: 5, // Slight movement to the right
            repeat: 3, // Shake 3 times
            yoyo: true,
            duration: 0.3, // Slow shaking effect
            ease: "power1.inOut",
            onComplete: () => {
                setTimeout(shakeEffect, 3000); // Wait 5 seconds before shaking again
            }
        });
    }
    shakeEffect(); // Start the shaking effect
}

// Trigger the animation when the document is loaded
document.addEventListener('DOMContentLoaded', animateFooterHeadings);

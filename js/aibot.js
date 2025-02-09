
function animateBotImage() {
    gsap.from(".bot-image img", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".bot-image img", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    });
}

document.addEventListener('DOMContentLoaded', animateBotImage);


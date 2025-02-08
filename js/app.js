
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








// nav bar end




const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    parallax_el.forEach(el => {
        let speedx = parseFloat(el.dataset.speedx) || 0;
        let speedy = parseFloat(el.dataset.speedy) || 0;
        let speedz = parseFloat(el.dataset.speedz) || 0;
        let rotateSpeed = parseFloat(el.dataset.rotation) || 0;
        



        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translate(calc(-50% + ${xValue * speedx}px), calc(-50% + ${yValue * speedy}px)) 
                              perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
    });
});


function startAnimation() {
    let timeline = gsap.timeline();

    Array.from(parallax_el)
        .filter(el => !el.classList.contains("text"))
        .forEach(el => {
            timeline.from(
                el,
                {
                    top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
                    duration: 3.5,
                    ease: "power3.out"
                },
                "1"
            );
        });

    timeline.from(".text h1", {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
        duration: 2,
    }, "2.5").from(".text h2", {
        y: -150,
        opacity: 0,
        duration: 1.5,
    }, "3");
}

startAnimation();

setInterval(() => {
    startAnimation();
}, 20000);

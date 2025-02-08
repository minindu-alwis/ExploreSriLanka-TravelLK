
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



const parallax_el = document.querySelectorAll(".parallax:not(.no-parallax)"); 
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
let xValue = 0, yValue = 0;

function applyParallax() {
    let rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    parallax_el.forEach(el => {
        let speedx = parseFloat(el.dataset.speedx) || 0;
        let speedy = parseFloat(el.dataset.speedy) || 0;
        let speedz = parseFloat(el.dataset.speedz) || 0;
        let rotateSpeed = parseFloat(el.dataset.rotation) || 0;

        el.style.transform = `translate(calc(-50% + ${xValue * speedx}px), calc(-50% + ${yValue * speedy}px))
                              perspective(2300px) translateZ(${speedz * 20}px) 
                              rotateY(${rotateDegree * rotateSpeed}deg)`;
    });
}

if (!isMobile) {
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
        applyParallax();
    });
}

if (isMobile) {
    window.addEventListener("deviceorientation", (e) => {
        if (e.beta !== null && e.gamma !== null) {
            xValue = e.gamma * 10;
            yValue = e.beta * 10;
            applyParallax();
        }
    });

    window.addEventListener("touchmove", (e) => {
        let touch = e.touches[0];
        xValue = touch.clientX - window.innerWidth / 2;
        yValue = touch.clientY - window.innerHeight / 2;
        applyParallax();
    });
}

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

    timeline
        .from(".text h1", {
            y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
            duration: 2,
            ease: "power3.out"
        }, "2.5")
        .from(".text h2", {
            y: -150,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "3")
        .from(".button", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)"
        }, "3.5")
        .set(".button", { clearProps: "all" }); 
}

startAnimation();

setInterval(() => {
    gsap.killTweensOf("*");
    startAnimation();
}, 30000);



const images = [
    "img/sigiri.jpg",
    "img/train.jpg",
    "img/water.jpg",
    "img/beach.jpg"
];

const imageContainer = document.querySelector(".image-content");
let currentIndex = 0;

// Function to update the image (only one image at a time)
function updateImage() {
    imageContainer.innerHTML = ""; // Clear previous images

    const img = document.createElement("img");
    img.src = images[currentIndex];
    img.classList.add("slideshow-img", "active");
    imageContainer.appendChild(img);
}

// Function to change image every 5 seconds
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Run image update on page load
updateImage();

// Change image every 5 seconds
setInterval(changeImage, 5000);







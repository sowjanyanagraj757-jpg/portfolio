// Smooth hover animation for skill cards

const skillCards = document.querySelectorAll(".skill-card-modern");

skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});


// Typing effect for tagline

const tagline = document.querySelector(".tagline");

const text = "MCA Student & Developer";

let index = 0;

function typeEffect() {

    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Clear original text before typing
tagline.textContent = "";

typeEffect();


// Scroll animation for sections

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});


// Initial styles for animation

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});
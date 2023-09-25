// Add scroll animations to sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-up");
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
// ***********************************
const profileImage = document.getElementById('profile-image');

function toggleSpinningLight() {
    profileImage.classList.toggle('contour');
}

// Set an interval to toggle the spinning-light class (adjust as needed)
setInterval(toggleSpinningLight, 1000);

const profile = document.getElementById('profile');

function toggleSpinningLight() {
    profile.classList.toggle('contour');
}

// Set an interval to toggle the spinning-light class (adjust as needed)
setInterval(toggleSpinningLight, 1000);
// ************************
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");


    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("light-spin"); // Add the class on hover
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("light-spin"); // Remove the class on mouse leave
        });
    });
    const skillCards = document.querySelectorAll(".skill");

    skillCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("light-spin"); // Add the class on hover
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("light-spin"); // Remove the class on mouse leave
        });
    });
});

// Toggle the mobile menu when the hamburger icon is clicked
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
let menuOpen = false;

menuIcon.addEventListener('click', () => {
    if (!menuOpen) {
        menuIcon.classList.add('active1');
        menuIcon.classList.add('active2');
        menuIcon.classList.add('active3');
        mobileMenu.style.display = 'block';
        menuOpen = true;
    } else {
        menuIcon.classList.remove('active1');
        menuIcon.classList.remove('active2');
        menuIcon.classList.remove('active3');
        mobileMenu.style.display = 'none';
        menuOpen = false;
    }
});

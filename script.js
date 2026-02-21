// Navigation buttons

const backBtn = document.getElementById("backBtn");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

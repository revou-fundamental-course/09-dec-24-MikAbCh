// Auto-slide banner
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slide");
 
function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);

// Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    if (!name || !email || !interest) {
        alert("Tolong isi semua bagian!");
        return false;
    }
    return true;
}
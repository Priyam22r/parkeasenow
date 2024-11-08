const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    testimonials[0].classList.add('active');
    setInterval(showNextTestimonial, 10000); // Change testimonial every 10 seconds
});
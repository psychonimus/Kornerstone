

const swiper = new Swiper('.sample-slider', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,          //add
    slidesPerView: 5,     //add
})


var links = document.querySelectorAll('.dropdown-item');
var btn = document.getElementById('close');
// var btn2 = document.getElementById('close-2');

links.forEach(function(link) {
    link.addEventListener('click', function() {
        // console.log('clicked');
        btn.click(); // Click the button
        // btn2.click(); // Click the button

        // Synchronize the button state with the dropdown state
        var checkbox = btn.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; // Toggle the checked state
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.test-cards-mobile .test-1-mobile');
    const moreButton = document.getElementById('more-btn-2');
    let currentIndex = 0;
    const testimonialsPerPage = 2;

    function showTestimonials(startIndex) {
        testimonials.forEach((testimonial, index) => {
            if (index >= startIndex && index < startIndex + testimonialsPerPage) {
                testimonial.classList.add('visible');
            } else {
                testimonial.classList.remove('visible');
            }
        });
    }

    function updateButton() {
        if (currentIndex + testimonialsPerPage >= testimonials.length) {
            moreButton.textContent = 'Back to Top';
        } else {
            moreButton.textContent = 'More';
        }
    }

    moreButton.addEventListener('click', function () {
        if (currentIndex + testimonialsPerPage >= testimonials.length) {
            currentIndex = 0;
        } else {
            currentIndex += testimonialsPerPage;
        }
        showTestimonials(currentIndex);
        updateButton();
    });

    // Initial setup
    showTestimonials(currentIndex);
    updateButton();
});












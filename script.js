document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



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














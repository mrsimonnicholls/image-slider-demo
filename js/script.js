document.querySelectorAll('.slider').forEach(initSlider);

function initSlider(slider) {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const leftBtn = slider.querySelector('.left');
    const rightBtn = slider.querySelector('.right');

    let currentIndex = 0;

    function updateSlide() {
        const slideWidth = slider.offsetWidth;
        const offset = -currentIndex * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;
    }

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    });

    window.addEventListener('resize', updateSlide);

    updateSlide(); // initialize position
}
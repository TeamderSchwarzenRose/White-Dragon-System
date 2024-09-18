let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

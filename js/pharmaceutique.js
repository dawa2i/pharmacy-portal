document.addEventListener('DOMContentLoaded', () => {
    // Pills Navigation
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // Ads Carousel
    const carousel = document.querySelector('.carousel-content');
    const slides = document.querySelectorAll('.ad-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let autoPlayInterval;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        slides[currentSlide].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slides every 5 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Add click events for navigation buttons
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    // Pause auto-play when hovering over carousel
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Handle touch events
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50; // minimum distance for swipe
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                prevSlide(); // Swipe right -> previous slide
            } else {
                nextSlide(); // Swipe left -> next slide
            }
        }
    }

    // Start auto-play
    startAutoPlay();

    // Search functionality
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Add search logic here
    });

    // Footer Navigation
    const footerBtns = document.querySelectorAll('.footer-btn');
    footerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            footerBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

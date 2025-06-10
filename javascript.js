const testSlides = document.querySelectorAll('.single-testmonial');
const dots = document.querySelectorAll('.dot');
const groupSize = 3;
let currentGroup = 0;
const totalGroups = 5; // since you want 5 indicators
let autoInterval;

// Hide all slides
function hideAll() {
    testSlides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Show current group of 3 slides
function showGroup(index) {
    hideAll();
    for (let i = 0; i < groupSize; i++) {
        let slideIndex = index * groupSize + i;
        if (slideIndex < testSlides.length) {
            testSlides[slideIndex].style.display = 'block';
            testSlides[slideIndex].style.animation = 'next2 0.5s ease-in forwards';
        }
    }
    updateDots(index);
}

// Update dots active state
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
}

// Auto-slide function
function slideNext() {
    currentGroup = (currentGroup + 1) % totalGroups;
    showGroup(currentGroup);
}

// Handle dot click
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentGroup = parseInt(dot.getAttribute('data-index'));
        showGroup(currentGroup);
    });
});

// Start auto sliding
function autoSliding() {
    autoInterval = setInterval(slideNext, 4000);
}

// Pause on hover
const indicatorContainer = document.querySelector('.indicators');
indicatorContainer.addEventListener('mouseover', () => clearInterval(autoInterval));
indicatorContainer.addEventListener('mouseout', autoSliding);

// Init
showGroup(currentGroup);
autoSliding();

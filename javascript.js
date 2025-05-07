<script>
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.single-testmonial');
    const visibleCount = 3;
    let startIndex = 0;

    function showTestimonials() {
        testimonials.forEach((t, index) => {
            t.style.display = "none";
        });

        for (let i = 0; i < visibleCount; i++) {
            const current = (startIndex + i) % testimonials.length;
            testimonials[current].style.display = "block";
        }

        startIndex = (startIndex + 1) % testimonials.length;
    }

    showTestimonials(); // Show initial set

    setInterval(showTestimonials, 3000); // Change every 3 seconds
});
</script>

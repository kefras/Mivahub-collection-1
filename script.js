// Home Page: Welcome Message
function showWelcomeMessage() {
    alert("Welcome to Mivahub Collection! Explore our latest designs!");
}

// About Page: Trustee Info
function showTrusteeInfo(name) {
    alert(`Learn more about ${name}, a key member of our team!`);
}

// Products Page: Add to Cart
function addToCart(product) {
    alert(`${product} has been added to your cart!`);
}

// Events Page: Event Details_axDetails
function showEventDetails(event) {
    alert(`Details for ${event}: Join us for an exclusive showcase!`);
}

// Contact Page: Form Submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contact-form').reset();
}

// Initialize page with a dynamic effect
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee');
    if (marquee) {
        marquee.style.animation = 'marquee 10s linear infinite';
    }
});
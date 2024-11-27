// Get elements from the DOM
const backToTopButton = document.getElementById('back-to-to');
const nameInput = document.getElementById('nameInput');
const namePreview = document.getElementById('namePreview');

// Listen for scroll event
window.addEventListener('scroll', () => {

    // Show or hide the back-to-top button based on scroll position
    if (window.scrollY > 300) {

        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Listen for click event on the back-to-top button

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Listen for input event on the name input field
nameInput.addEventListener('input', (event) => {
    // Update the name preview with the input value
    namePreview.textContent = event.target.value || 'Your name will appear here';
});


function sayHello() {
    // Get the value from the input field
    let name = document.getElementById('nameInput').value;

    if (name) {
        // Display a personalized greeting
        document.getElementById('greeting').textContent = `Hello, ${name}! Welcome to our site.`;
    } else {
        // Display a default message if no name is entered
        document.getElementById('greeting').textContent = "Hello, Guest! Please enter your name.";
    }
}

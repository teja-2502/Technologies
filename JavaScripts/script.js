document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        // You can add further validation or processing here
        alert('Thank you for your message!');
    }
});

function order() {
    alert('Order functionality is coming soon!');
}

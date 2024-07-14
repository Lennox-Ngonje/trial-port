// Initialize AOS
 AOS.init({
    duration: 1400, // Animation duration
    offset: 300, // Offset from the original trigger point
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (email && message) {
        alert(`Email: ${email}\nMessage: ${message}`);
        // Here you can add your logic to send the data to your server
        // For example, using fetch or XMLHttpRequest
    } else {
        alert('Please fill in all fields.');
    }

    // Creating the data object to be sent
    const formData = {
        email: email,
        message: message
    };

    // Sending the data to the server
    fetch('https://mail.google.com/mail/u/0/#inbox', { // Replace with your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });

});

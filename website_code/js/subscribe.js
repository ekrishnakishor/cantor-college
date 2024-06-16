document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    alert('Subscribed with: ' + email);
    // You can add your form submission code here
});

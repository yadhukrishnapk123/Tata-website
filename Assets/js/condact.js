  // JavaScript to handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you can do something with the form data, like sending it to a server or displaying it
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // For demonstration purposes, let's just display an alert
    alert("Thank you, " + name + "! Your message has been submitted.");
});
const text = "Hello, I am Grace G. Getungo, a student at Saint Peter's College, currently studying Computer Studies.";
const typingElement = document.getElementById("typing-effect");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50); 
  }
}

typeEffect();

(function() {
    emailjs.init("4uRlW3YE6_FEevaAQ");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_lil72ad', 'template_7r02j1o', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});



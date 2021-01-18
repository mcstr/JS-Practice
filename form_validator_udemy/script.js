const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;
// Validation function

function validateForm() {
  // Using Constraint API

  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  }
  // check if password match

  if (password1.value === password2.value) {
    console.log(password1.value);
    console.log(password2.value);
    passwordsMatch = true;
    password1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
    console.log(passwordsMatch);
  } else {
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    message.textContent = 'Please check your passwords';
    messageContainer.style.borderColor = 'red';
    message.style.color = 'red';
  }
}

// Event Listener
function processFormData(e) {
  e.preventDefault();
  // Validate Form

  validateForm();
}

form.addEventListener('submit', processFormData);

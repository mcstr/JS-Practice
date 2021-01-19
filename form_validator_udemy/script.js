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
    // add a return in case is not valid so it does not have to keep running the code
    return;
  }
  // check if password match

  if (password1.value === password2.value) {
    passwordsMatch = true;
    password1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
  } else {
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    message.textContent = 'Please check your passwords';
    messageContainer.style.borderColor = 'red';
    message.style.color = 'red';
    // add return if it is false so it will avoid to keep running the code to the next if
    return;
  }

  // if form is valid and password match

  if (isValid && passwordsMatch) {
    message.textContent = 'Succesfully Registerd!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  // Do something with user data
  console.log(user);
}

// Event Listener
function processFormData(e) {
  e.preventDefault();
  // Validate Form

  validateForm();

  // submit data if valid

  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener('submit', processFormData);

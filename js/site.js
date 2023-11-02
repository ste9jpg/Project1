const fname = document.getElementById('input-fname')
const lname = document.getElementById('input-lname')
const lname = document.getElementById('input-email')
const lname = document.getElementById('input-phone')
const lname = document.getElementById('send')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

//required fields that must be filled out 
form.addEventListener('submit', (e) => {
  let messages = [];

  if (fname.value === '' || fname.value == null) {
    messages.push('First Name is required');
  }

  if (lname.value === '' || lname.value == null) {
    messages.push('Last Name is required');
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required');
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    messages.push('Invalid email format');
  }

  if (phone.value === '' || phone.value == null) {
    messages.push('Phone Number is required');
  }
  
//email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    messages.push('Invalid email format');
  }

  if (phone.value === '' || phone.value == null) {
    messages.push('Phone Number is required');
  }

//phone validation 
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phone.value)) {
    messages.push('Invalid phone number format (e.g., 123-456-7890)');
  }

// button validation 
button.addEventListener("click", function() {
    alert("Button Clicked!");
});

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});

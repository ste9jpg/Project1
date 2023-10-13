const fname = document.getElementById('input-fname')
const lname = document.getElementById('input-lname')
const lname = document.getElementById('input-email')
const lname = document.getElementById('input-phone')
const lname = document.getElementById('input-interested')
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

//One radio button has to be checked

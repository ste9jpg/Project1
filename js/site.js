const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const lname = document.getElementById('email');
const lname = document.getElementById('phone');
const lname = document.getElementById('send');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

//required fields that must be filled out 
form.addEventListener('submit', function(e) {
  let messages = [];

  if (fnameInput.value === '' || fnameInput.value == null) {
    messages.push('First Name is required');
  }

  if (lnameInput.value === '' || lnameInput.value == null) {
    messages.push('Last Name is required');
  }
  
//email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    messages.push('Invalid email format');
  }

//phone validation 
  if (phoneInput.value === '' || phoneInput.value === null) {
    messages.push('Phone Number is required');
  } else {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneInput.value)) {
      messages.push('Invalid phone number format (e.g., 123-456-7890)');
    }
  }
// button validation 
send.addEventListener("click", function() {
    alert("Button Clicked!");
});

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});

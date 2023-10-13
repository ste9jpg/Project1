const fname = document.getElementById('input-fname')
const lname = document.getElementById('input-lname')
const lname = document.getElementById('input-email')
const lname = document.getElementById('input-phone')
const lname = document.getElementById('input-interested')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

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
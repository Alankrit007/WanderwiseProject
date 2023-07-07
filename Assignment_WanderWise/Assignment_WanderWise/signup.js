// Get the form element
const signupForm = document.getElementById('signupForm');

// Add event listener for form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Perform form validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Create an object with the form data
  const user = {
    name: name,
    email: email,
    password: password
  };

  // Save the user data to Local Storage
  localStorage.setItem('userData', JSON.stringify(user));

  // Display a success message
  alert('Sign up successful! You can now login.');

  // Reset the form
  signupForm.reset();
});

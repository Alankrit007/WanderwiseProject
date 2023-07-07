document.addEventListener('DOMContentLoaded', function() {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
  
    bookNowBtn.addEventListener('click', function() {
      loginModal.style.display = 'block';
    });
  
    loginModal.addEventListener('click', function(event) {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  
    loginBtn.addEventListener('click', function() {
      // Handle login logic here
      console.log('Login');
    });
  
    signupBtn.addEventListener('click', function() {
      // Handle signup logic here
      console.log('Sign Up');
    });
  });
  



    document.addEventListener("DOMContentLoaded", function() {
       
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
      });
      
    const form = document.getElementById('loginform');
    const popup = document.getElementById('popup');
     const dialog=document.getElementById("popup");
  
     
     var dialogPopup=false;
  
    form.addEventListener('submit', function(event) {
      
      dialogPopup=!dialogPopup;
      
      event.preventDefault();
      dialogPopup?dialog.style.display="block":dialog.style.display="none";
       console.log("hello im clicked");
    });
  
  
  
  
    function closePopup() {
      const popup = document.getElementById('popup');
      popup.style.display = 'none';
    }
  
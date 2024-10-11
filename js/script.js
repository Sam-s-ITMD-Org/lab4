document.getElementById('signupForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   
    errorMessage.style.display = 'none';
  
    if (!name || !email || !country || !email.match(emailPattern)) {
      event.preventDefault();
      errorMessage.style.display = 'block';
    }
  });
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.textContent = 'Added';
      button.disabled = true;
      button.style.backgroundColor = '#4CAF50';
      button.style.boxShadow = '0 8px 20px rgba(76, 175, 80, 0.5)';
    });
  });

    document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.textContent = 'Removed';
      button.disabled = true;
    button.style.backgroundColor = '#F44336';
    button.style.boxShadow = '0 8px 20px rgba(244, 67, 54, 0.5)';
    });
  });
  
  // JavaScript for basic form validation
  function validateForm() {
    let isValid = true;

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    if (!username) {
      usernameError.style.display = 'block';
      isValid = false;
    } else {
      usernameError.style.display = 'none';
    }

    if (!password) {
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      passwordError.style.display = 'none';
    }

    return isValid; // prevents form submission if false
  }




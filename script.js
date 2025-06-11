const passwordInput = document.getElementById('passwordInput');
const strengthMessage = document.getElementById('strengthMessage');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);

  strengthMessage.textContent = strength.message;
  strengthMessage.style.color = strength.color;
});

function checkPasswordStrength(password) {
  if (password.length === 0) {
    return { message: 'Type a password to check strength', color: '#555' };
  }

  let score = 0;

  // Length points
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // Contains lowercase
  if (/[a-z]/.test(password)) score++;

  // Contains uppercase
  if (/[A-Z]/.test(password)) score++;

  // Contains number
  if (/\d/.test(password)) score++;

  // Contains special char
  if (/[\W_]/.test(password)) score++;

  if (score <= 2) {
    return { message: 'Weak', color: 'red' };
  } else if (score <= 4) {
    return { message: 'Moderate', color: 'orange' };
  } else {
    return { message: 'Strong', color: 'green' };
  }
}

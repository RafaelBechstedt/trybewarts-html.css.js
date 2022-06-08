function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const validLogin = email === 'tryber@teste.com' && password === '123456';
  if (validLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkAgreement() {
  const submitForm = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');
  if (agreement.checked) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', login);

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', checkAgreement);

const submitForm = document.getElementById('submit-btn');
submitForm.addEventListener('click', (event) => {
  event.preventDefault();
});

const textArea = document.getElementById('textarea');
textArea.addEventListener('keypress', () => {
  const text = document.getElementById('textarea');
  const counterText = document.getElementById('counter');
  counterText.innerText = text.maxLength - text.value.length;
});

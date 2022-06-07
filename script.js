function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const validLogin = email === 'tryber@teste.com' && password === '123456';
  if (validLogin) {
    alert('Olá,Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', login);

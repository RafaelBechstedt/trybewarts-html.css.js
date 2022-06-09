const getID = (id) => document.getElementById(id);
const querySelector = (element) => document.querySelector(element);
const querySelectorAll = (element) => {
  const nodeList = document.querySelectorAll(element);
  const result = [...nodeList].map((arr) => arr.value);
  return result;
};
const form = getID('evaluation-form');
const result = getID('form-data');
result.style.display = 'none';

function getFormValues() {
  const content = {
    name: getID('input-name').value,
    lastName: getID('input-lastname').value,
    email: getID('input-email').value,
    house: getID('house').value,
    family: querySelector('input[name=\'family\']:checked').value,
    learn: querySelectorAll('input[type=\'checkbox\']:checked').join(', '),
    rate: querySelector('input[name=\'rate\']:checked').value,
    comment: getID('textarea').value,
  };
  return content;
}

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
    submitForm.style.backgroundColor = 'rgb(78, 44, 131)';
    submitForm.style.color = 'white';
  } else {
    submitForm.disabled = true;
    submitForm.style.backgroundColor = 'grey';
    submitForm.style.color = 'white';
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', login);

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', checkAgreement);

const submitForm = document.getElementById('submit-btn');
submitForm.addEventListener('click', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  result.style.display = 'flex';
  const content = getFormValues();
  result.innerText = `
  Nome: ${content.name} ${content.lastName}
  Email: ${content.email}
  Casa: ${content.house}
  Família: ${content.family}
  Matérias: ${content.learn}
  Avaliação: ${content.rate}
  Observações: ${content.comment}
  `;
});

const textArea = document.getElementById('textarea');
textArea.addEventListener('input', () => {
  const text = document.getElementById('textarea');
  const counterText = document.getElementById('counter');
  counterText.innerText = text.maxLength - text.value.length;
});

const elName = document.querySelector('.login_input');
const elBtn = document.querySelector('.login_button');
const elForm = document.querySelector('.login-form');


const validateName = (e) => {
  if (e.target.value.length > 2) {
    elBtn.removeAttribute('disabled');
  } else {
    elBtn.setAttribute('disabled', '');
  }
}

elName.addEventListener('input', validateName);

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem('mem:player', elName.value);

  window.location = 'pages/game.html';
}

elForm.addEventListener('submit', handleSubmit);

// elName.value = localStorage.getItem('mem:player');

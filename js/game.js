const grid = document.querySelector('.grid');
const elPlayer = document.querySelector('.player');
const elTimer = document.querySelector('.timer');

let selectedCards = ['', ''];
let timer;

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy'
]

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === characters.length * 2) {
    setTimeout(() => {
      alert(`Parabéns, ${elPlayer.textContent}. Você conseguiu! Tempo: ${elTimer.textContent} segundos.`);
      startTimer();
      loadCards();
    }, [500]);
  }
}

const checkCards = () => {
  const character1 = selectedCards[0].getAttribute('data-character');
  const character2 = selectedCards[1].getAttribute('data-character');

  if (character1 === character2) {
    selectedCards[0].firstChild.classList.add('disabled-card');
    selectedCards[1].firstChild.classList.add('disabled-card');
    selectedCards = ['',''];

    checkEndGame();
    
  } else {
    setTimeout(() => {
      selectedCards[0].classList.remove('show-card');
      selectedCards[1].classList.remove('show-card');
      selectedCards = ['',''];
    }, 700);    
  }
}

const showCard = (ev) => {
  const cardPai = ev.target.parentElement;
  
  if (cardPai.className.includes('show-card')) return;

  if (selectedCards[0] === '') {
    cardPai.classList.add('show-card');
    selectedCards[0] = cardPai;
  } 
  else if (selectedCards[1] === '') {
    cardPai.classList.add('show-card');
    selectedCards[1] = cardPai;
    checkCards();
  }
}

const createElement = (tag, className) => {
  const elem = document.createElement(tag);
  elem.className = className;
  return elem;
}

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url(../images/${character}.png)`;
  // front.setAttribute('style', `background-image: url(../images/${character}.png)`);
  
  card.append(front, back);

  card.addEventListener('click', showCard);
  card.setAttribute('data-character', character);

  return card;
}

const shuffleArray = (lista) => {
  return lista.sort(() => Math.random() - 0.5);
}

const loadCards = () => {
  const allCards = shuffleArray([...characters, ...characters]);

  grid.innerHTML = '';

  allCards.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  })
}

const startTimer = () => {
  if (timer) {
    clearInterval(timer);
  }

  elTimer.textContent = '0';

  timer = setInterval(() => {
    
    const currentTime = parseInt(elTimer.textContent);
    elTimer.textContent = (currentTime + 1);

  }, 1000);
}

window.onload = () => {
  
  const playerName = localStorage.getItem('mem:player');
  elPlayer.textContent = playerName;
  startTimer();
  loadCards();
}



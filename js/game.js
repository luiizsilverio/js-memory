const grid = document.querySelector('.grid');

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

  return card;
}

const loadCards = () => {

  characters.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  })

}

loadCards();


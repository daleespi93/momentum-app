// ARRAYS
const quotes = [
    "The sunrise doesn’t rush — and yet, it always arrives on time. So can you.",
    "Growth begins the moment you choose courage over comfort.",
    "You are not behind — you’re building momentum.",
    "Every setback is just a plot twist in your success story.",
    "Dreams don’t expire. They wait patiently for your belief."
]

const backgroundImages = [
  'url("bg/campfire.gif")',
  'url("bg/campfire2.gif")',
  'url("bg/campfire4.gif")'
];

const todoList = []

// CLOCK
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
// updateClock(); 

// RANDOMIZE AND SHOW QUOTES WITH CHANGE QUOTE BUTTON
function showQuote(){
  const giveQuote = document.getElementById('quote')
  function randomQuote(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  giveQuote.textContent = randomQuote(quotes);
}
showQuote()
document.getElementById('change-quote').addEventListener('click',showQuote) // Change quote button

// ADD QUOTE
function addQuote() {
  let quoteInput = document.getElementById('input-quote').value;
  document.getElementById('input-quote').value = ''

  quotes.push(quoteInput)

  // add quote-ist here to show in popup also
}
document.getElementById('btn-quote').addEventListener('click',addQuote)

// INPUT AND SHOW NAME
function addName() {
  let textInput = document.getElementById('input-greeting').value;
  let greet = document.getElementById('greeting');
  let greetBox = document.getElementById('form-greeting');

  document.getElementById('input-greeting').value = ''

  greet.textContent = `Greetings, ${textInput}.`;
  greetBox.style.display = 'none';
  document.getElementById('div-quote').style.display = 'flex';
  document.getElementById('img-open').style.display = 'flex';
  document.getElementById('img-quote').style.display = 'flex';
  document.getElementById('clock').style.display = 'flex';
  document.getElementById('div-prio').style.display = 'flex';
  document.getElementById('div-greeting').style.display = 'flex';
}
document.getElementById('btn-greeting').addEventListener('click', addName)

// BACKGROUND IMAGE RANDOMIZER
function background(){
  const image = document.getElementById('main')
  function randomImage(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  image.style.background = randomImage(backgroundImages);
  image.style.backgroundSize = 'cover';
}
background()

// ADD ITEMS TO LIST
 function addList() {
    const list = document.getElementById('todo-list');
    const todoInput = document.getElementById('input-todo').value;

    todoList.push(todoInput);
    document.getElementById('input-todo').value = ''

    let i = 0;
    let item = document.createElement('li')

    while (i < todoList.length) {
      item.textContent = todoList[i];
      list.append(item)
      i++;
  }
}
document.getElementById('btn-todo').addEventListener('click', addList)

// OPEN AND CLOSE TO-DO LIST
function closeList() {
  let scroll = document.getElementById('div-todo');
  scroll.style.display = 'none';

  document.getElementById('img-open').style.display = 'block';
}
document.getElementById('img-close').addEventListener('click', closeList)

function openList() {
  let scroll = document.getElementById('div-todo');
  scroll.style.display = 'block';

  document.getElementById('img-open').style.display = 'none';
}
document.getElementById('img-open').addEventListener('click', openList)

// ADD PRIO
function addPrio() {
  let prioInput = document.getElementById('input-prio').value;
  let parPrio = document.getElementById('div-p-prio');


  parPrio.textContent = prioInput;
  parPrio.style.display = 'block';
  document.getElementById('input-prio').style.display = 'none';
}
document.getElementById('btn-prio').addEventListener('click', addPrio)

// OPEN AND CLOSE QUOTES
function closeQuote() {
  let quoteList = document.getElementById('div-form-quote');
  quoteList.style.display = 'none';

  document.getElementById('img-quote').style.display = 'flex';
}
document.getElementById('img-close-quote').addEventListener('click', closeQuote)

function openQuote() {
  let quoteList = document.getElementById('div-form-quote');
  quoteList.style.display = 'flex';

  document.getElementById('img-quote').style.display = 'none';
}
document.getElementById('img-quote').addEventListener('click', openQuote)

// SHOW QUOTE ARRAY
const qList = document.getElementById('quote-list')

for (let i = 0; i < quotes.length; i++) {
  
  let newQuote = document.createElement('li');
  newQuote.textContent = quotes[i];
  qList.append(newQuote);

  newQuote.style.fontSize = '.75rem'
}
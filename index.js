const input = document.querySelector('.input');
const text = document.querySelector('.text');
const arr = ['Я тебя не понимаю!', 'Может поздороваешься для начала?', 'Может спросишь меня про Тайную Комнату?', 'Псс... Не хочешь узнать про Тайную Комнату?', 'Ты случайно не Гарри Поттер?', 'Напиши: "Привет"'];
const def = 'Задай здесь свой вопрос';
const rofl = document.createElement('img');
rofl.src = '../img/pngegg.png';
rofl.className = 'rofl';
input.value = def;
const reddleBook = () => {
  input.classList.add('hidden');
  text.classList.add('hidden');
  setTimeout(() => {
    const q = input.value.toLowerCase();
    if (input.value.toLowerCase().includes('привет') || input.value.toLowerCase().includes('здравствуй') || input.value.toLowerCase().includes('даров')) {
      text.innerText = 'Привет, меня зовут Том Реддл!';
    } else if (input.value.toLowerCase().includes('комнат')) {
      text.innerText = 'Да';
    } else if (input.value.toLowerCase().includes('расска')) {
      text.innerText = 'Нет!';
      text.appendChild(rofl);
    } else if (input.value.toLowerCase().includes('поттер')) {
      text.innerText = 'Пошёл ты нахрен! Мне хватило прошлой встречи!';
    } else if (input.value.toLowerCase().includes('?')) {
      text.innerText = 'Задай другой вопрос!';
    } else {
      text.innerText = arr[Math.floor(Math.random() * 5)];
    }
    text.classList.remove('hidden');
    input.classList.remove('hidden');
    input.value = def;
  }, 1000);
};

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    reddleBook();
  } else if (input.value === def) {
    input.value = '';
  }
});

let isOpen = false;
let isExpanded = false;
let openTimer;
let closeTimer;
const book = document.querySelector('.book');
input.classList.add('hidden');

document.querySelector('.btn').addEventListener('click', () => {
  if (!isOpen) {
    book.classList.add('open');
    isOpen = true;
    openTimer = setTimeout(() => {
      book.classList.add('expanded');
      isExpanded = true;
      input.focus();
      input.classList.remove('hidden');
    }, 800);
  } else if (isExpanded) {
    book.classList.remove('expanded');
    isExpanded = false;

    closeTimer = setTimeout(() => {
      book.classList.remove('open');
      isOpen = false;
    }, 800);
  }
});

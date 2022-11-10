// Menu
const navItemList = document.querySelector('.navbar__items__list');
const logInBtn = document.querySelector('.input__button');

// Burger menu
const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.navbar__items');
const body = document.querySelector('body');

// Timer
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`${currentYear + 1}-01-01`);

// Log in window
const input = document.querySelector('.div__input');
const closeModal1 = document.querySelector('.close__modal1');
const overlay = document.querySelector('.overlay');
const goToCabinet = document.querySelector('.button__item');

// Email validation
const inputEmail = document.querySelector('.input__email');
const inputPass = document.querySelector('.input__password');
const error = document.querySelector('.error');


// Menu
const initialRender = () => {
  const navMenu = [
    { id: 0, name: "Главная" },
    { id: 1, name: "Курсы" },
    { id: 2, name: "Расписание" },
    { id: 3, name: "Преподаватели" },
    { id: 4, name: "Рассылка" },
    { id: 5, name: "Контакты" },
  ];

  let html = "";
  navMenu.map((item, index) => {
    html += `
    <a href="#id${item.id}">
    <li class="items">${item.name}</li>
    </a>
         `;
  });
  navItemList.innerHTML = html;
};
window.document.addEventListener("DOMContentLoaded", initialRender);


// Burger menu
if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_active');
  })
}


// Timer
const updateCountdowntime = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}
updateCountdowntime();
setInterval(updateCountdowntime, 1000);


// enale disable scroll
const disableBodyScroll = () => {
  const element = document.querySelector("#appBody");
  element.classList.add("stop-scroll");
}
const enableBodyScroll = () => {
  const element = document.querySelector("#appBody");
  element.classList.remove("stop-scroll");
}


// Log in window
goToCabinet.addEventListener('click', () => {
  input.classList.remove('hidden');
  overlay.classList.remove('hidden');
  disableBodyScroll();
  logInBtn.disabled = true;
  logInBtn.classList.add("disabled");
})
closeModal1.addEventListener('click', () => {
  input.classList.add('hidden');
  overlay.classList.add('hidden');
  enableBodyScroll();
})
overlay.addEventListener('click', () => {
  input.classList.add('hidden');
  overlay.classList.add('hidden');
  enableBodyScroll();
})



// email valdation
inputEmail.addEventListener('input', (event) => {
  let temail = inputEmail.value.trim();
  let emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  let illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (inputEmail.value === "") {
    error.innerHTML = "Введите свой адрес электронной почты.";
  } else if (!emailFilter.test(temail)) { //test email for illegal characters
    error.innerHTML = "Введите действительный адрес электронной почты.";
  } else if (inputEmail.value.match(illegalChars)) {
    error.innerHTML = "Электронная почта содержит недопустимые символы.";
  } else {
    let resultEmail = inputEmail.value;
    error.innerHTML = '';
    console.log("Email: ", resultEmail);
    logInBtn.disabled = false;
    logInBtn.classList.remove("disabled");
  }
});


// Password
inputPass.addEventListener('input', (event) => {
  logInBtn.addEventListener('click', () => {
    let resultPass = inputPass.value;
    console.log("Password: ", resultPass);
  })
})


// SetTimeout
logInBtn.addEventListener('click', (event) => {
  event.preventDefault();
  setTimeout(closeForm, 2000)
  function closeForm() {
    input.classList.add('hidden');
    overlay.classList.add('hidden');
    enableBodyScroll();
  }
});

//footer email validation
const footerEmail = document.querySelector('.footer_email');
const footerError = document.querySelector('.footer__error__text');

footerEmail.addEventListener('input', (event) => {
  console.log(footerEmail.value);

  let footerTrim = footerEmail.value.trim();
  let filterEmail = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  let symbolsLegal = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (footerEmail.value === "") {
    footerError.innerHTML = "Введите свой адрес электронной почты.";
  } else if (!filterEmail.test(footerTrim)) { //test email for illegal characters 
    footerError.innerHTML = "Введите действительный адрес электронной почты.";
  } else if (footerEmail.value.match(symbolsLegal)) {
    footerError.innerHTML = "Электронная почта содержит недопустимые символы.";
  } else {
    footerError.innerHTML = '';
  }
});



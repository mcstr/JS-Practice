const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sortRich = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');
const main = document.getElementById('main');

let data = [];

addNewUser();
addNewUser();
addNewUser();

// functions

// fetch user and add money
async function addNewUser() {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addPeopleToData(newUser);
}

// add object to the data array

function addPeopleToData(obj) {
  data.push(obj);
  updateDOM();
}

// update DOM

function updateDOM(providedData = data) {
  // clear main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
  providedData.forEach((person) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;
    main.appendChild(element);
  });
}

// format number as money

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function makeMoneyDouble() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// sort user by richest

function sortRichPeople() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// show only millionaire ppl

function showTheMillions() {
  data = data.filter((element) => element.money > 1000000);
  updateDOM();
}

// event listeners

addUser.addEventListener('click', addNewUser);
doubleMoney.addEventListener('click', makeMoneyDouble);
sortRich.addEventListener('click', sortRichPeople);
showMillionaires.addEventListener('click', showTheMillions);

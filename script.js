const button = document.querySelector('button');
const id = document.querySelector('span');
const advice = document.querySelector('h2');

button.addEventListener('click', getAdvice);

function getAdvice() {
  fetch('	https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      advice.innerText = `"${data.slip.advice}"`;
      id.innerText = `Advice #${data.slip.id}`;
    });
}

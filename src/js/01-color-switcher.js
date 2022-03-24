const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
console.log(startRef);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
let isEnable = true;
let intervalId;

startRef.addEventListener('click', () => {
  if (!isEnable) { return };
  isEnable = false;
  intervalId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
});
stopRef.addEventListener('click', () => {
  clearInterval(intervalId);
  isEnable = true;
});
console.dir(document.body);
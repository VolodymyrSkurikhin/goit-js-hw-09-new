const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
console.dir(startRef);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
startRef.disabled = false;
stopRef.disabled = true;
let intervalId;

startRef.addEventListener('click', () => {
  if (startRef.disabled) { return };
  startRef.disabled = true;
  stopRef.disabled = false;
  intervalId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
});
stopRef.addEventListener('click', () => {
  clearInterval(intervalId);
  startRef.disabled = false;
  stopRef.disabled = true;
});
console.dir(document.body);
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const pickerRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

btnRef.disabled = true;
console.dir(pickerRef);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] - new Date() <= 0) {
      alert("Please choose a date in the future") 
      return;
    }
    btnRef.disabled = false;
  },
};
const fp = flatpickr(pickerRef, options);  // flatpickr
// let time;
function startCount() {
  const timerId = setInterval(() => {
    const ms = new Date(fp.selectedDates[0]) - new Date();
    if (ms <= 0) {
      clearInterval(timerId);
    }
    const { days, hours, minutes, seconds } = convertMs(ms);
    updateTimer({ days, hours, minutes, seconds });
    console.log({ days, hours, minutes, seconds })
  }, 1000)
  btnRef.disabled = true;
  pickerRef.disabled = true;
};
btnRef.addEventListener('click', startCount);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day),3);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour),2);
  // Remaining minutes
  const minutes =addLeadingZero(Math.floor(((ms % day) % hour) / minute),2);
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second),2);

  return { days, hours, minutes, seconds };
};

function updateTimer({ days, hours, minutes, seconds }) {
  daysRef.textContent = [days];
  hoursRef.textContent = [hours];
  minutesRef.textContent = [minutes];
  secondsRef.textContent = [seconds];

};

function addLeadingZero(value, padding) {
  return String(value).padStart(padding, '0')
};


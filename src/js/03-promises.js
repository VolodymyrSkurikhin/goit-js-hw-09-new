const formRef = document.querySelector("form");

formRef.addEventListener('click', makePromises);

function makePromises(event) {
  event.preventDefault();
  const promiseAmount = Number(event.currentTarget.elements.amount.value);
  const step = Number(event.currentTarget.elements.step.value);
  let delay = Number(event.currentTarget.elements.delay.value);
  for (let position = 1; position <= promiseAmount; position+=1) {
    createPromise(position,delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay+=step;
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
};

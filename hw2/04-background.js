// Add your code here
const Button = document.querySelector('button');
const Input = document.querySelector('input');
const Body = document.querySelector('body');
let IntervalId;
Body.style.backgroundColor = '#7160d9';

function setBackgroundColor() {
  const val1 = Math.random() * 255;
  const val2 = Math.random() * 255;
  const val3 = Math.random() * 255;
  Body.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`;
}

function handleButtonSubmission(event) {
  if (Button.innerText === 'Start') {
    const usrInput = Input.value;
    if (isNaN(usrInput) || usrInput === '') {
      event.preventDefault();
      alert('Please enter a number greater than zero.');
      return;
    }
    Button.innerText = 'Stop';
    Button.classList = 'btn btn-danger mt-3';
    IntervalId = setInterval(setBackgroundColor, usrInput * 1000);
  } else {
    clearInterval(IntervalId);
    IntervalId = null;
    Button.innerText = 'Start';
    Button.classList = 'btn btn-primary mt-3';
  }
}

window.addEventListener('load', () => {
  IntervalId = setInterval(setBackgroundColor, 3000);
});

Button.addEventListener('click', handleButtonSubmission);

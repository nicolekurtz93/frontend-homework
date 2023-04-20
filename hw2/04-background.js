// Add your code here
const Button = document.querySelector('button');
const Input = document.querySelector('input');
const Body = document.querySelector('body');
let IntervalId;

function setBackgroundColor() {
  const val1 = Math.random() * 255;
  const val2 = Math.random() * 255;
  const val3 = Math.random() * 255;
  Body.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`;
}

function handleButtonSubmission() {
  if (Button.innerText === 'Start') {
    Button.innerText = 'Stop';
    Button.classList = 'btn btn-danger';

    IntervalId = setInterval(setBackgroundColor, Input.value);
  } else {
    clearInterval(IntervalId);
    IntervalId = null;
    Button.innerText = 'Start';
    Button.classList = 'btn btn-primary';
  }
}

Button.addEventListener('click', handleButtonSubmission);

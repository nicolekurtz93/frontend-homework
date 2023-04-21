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

function handleButtonSubmission(e) {
  const usrInput = Input.value;
  if (isNaN(usrInput) || usrInput === '') {
    e.preventDefault();
    alert('Please enter a number greater than zero.');
    return;
  }
  if (Button.innerText === 'Start') {
    Button.innerText = 'Stop';
    Button.classList = 'btn btn-danger';
    IntervalId = setInterval(setBackgroundColor, usrInput);
  } else {
    clearInterval(IntervalId);
    IntervalId = null;
    Button.innerText = 'Start';
    Button.classList = 'btn btn-primary';
    Body.style.backgroundColor = '#7160d9';
  }
}

Button.addEventListener('click', handleButtonSubmission);

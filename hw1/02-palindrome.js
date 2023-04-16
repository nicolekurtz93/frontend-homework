const elem = document.querySelector('input');
const resultDiv = document.querySelector('#result');
const palindromeText = document.createElement('p');
palindromeText.textContent = '';
resultDiv.appendChild(palindromeText);

function handleInput() {
  if (Number.isNaN(elem.value)) {
    palindromeText.textContent = 'Palindrome must be a number. Try again.';
    palindromeText.classList = 'text-danger';
    return;
  }
  if (elem.value === '' || elem.value === null) {
    palindromeText.textContent = '';
    return;
  }
  const stringVersion = elem.value.toString();
  const stringReversed = stringVersion.split('').reverse('').join('');
  if (elem.value > 0 && stringReversed === stringVersion) {
    palindromeText.textContent = 'Yes. This is a palindrome!';
    palindromeText.classList = 'text-success';
  } else {
    palindromeText.textContent = 'No. Try again.';
    palindromeText.classList = 'text-danger';
  }
}

elem.addEventListener('input', handleInput);

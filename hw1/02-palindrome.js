const elem = document.querySelector('input');
const resultDiv = document.querySelector('#result');
const palindromeText = document.createElement("p");
palindromeText.textContent = "";
resultDiv.appendChild(palindromeText);

elem.addEventListener('input', handleInput);

function handleInput() {
    if (isNaN(elem.value)) {
        palindromeText.textContent = "Palindrome must be a number. Try again."
        palindromeText.style.color = "red"
        return;
    }
    let stringVersion = elem.value.toString();
    let stringReversed = reverseString(stringVersion);
    if (elem.value > 0 && stringReversed === stringVersion) {
        palindromeText.textContent = "Yes. This is a palindrome!"
        palindromeText.style.color = "green"
    }
    else {
        palindromeText.textContent = "No. Try again."
        palindromeText.style.color = "red"
    }
}

function reverseString(stringToReverse) {
    let reversedString = "";
    for (let i = stringToReverse.length - 1; i >= 0; --i) {
        reversedString += stringToReverse[i];
    }
    return reversedString;
}


// Add your code here
const input = document.querySelector('input');
const content = document.querySelector('#content');
const main = document.querySelector('main');
const result = document.createElement('div');
main.appendChild(result);
document.querySelector('body').style.backgroundColor = '#13415b';

function handleKeyDown() {
  const userInput = input.value;
  const InitalTextHtml = content.innerHTML;
  content.style.display = 'None'; // Doing this so I don't lose my original text
  result.innerHTML = InitalTextHtml; // Resetting the inner HTML to prevent duplicate marks
  if (userInput !== '') {
    const HighlightedText = InitalTextHtml.replaceAll(userInput, `<mark style="background-color: #fcff2d;">${userInput}</mark>`);
    result.innerHTML = HighlightedText;
  }
}

input.addEventListener('input', handleKeyDown);

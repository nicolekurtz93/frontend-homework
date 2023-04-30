// Add your code here
const input = document.querySelector('input');
const content = document.querySelector('#content');
const text = content.innerHTML;
document.querySelector('body').style.backgroundColor = '#13415b';

function handleKeyUp() {
  const userInput = input.value;
  content.innerHTML = text;
  const InitalTextHtml = content.innerHTML;
  content.innerHTML = InitalTextHtml; // Resetting the inner HTML to prevent duplicate marks
  if (userInput !== '') {
    const HighlightedText = InitalTextHtml.replaceAll(userInput, `<mark style="background-color: #fcff2d;">${userInput}</mark>`);
    content.innerHTML = HighlightedText;
  }
}

input.addEventListener('keyup', handleKeyUp);

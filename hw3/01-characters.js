// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const throneSection = document.querySelector('section');
throneSection.style.display = 'flex';
throneSection.style.flexWrap = 'wrap';
throneSection.style.justifyContent = 'center';

function styleThroneDiv() {
  const divToStyle = document.createElement('div');
  divToStyle.className = 'gameOfThrones m-2 p-2 justify-content-center';
  divToStyle.onmousemove = () => {
    this.style.backgroundColor = '#13415b';
    this.style.color = 'white';
  };
  divToStyle.onmouseout = () => {
    this.style.backgroundColor = '';
    this.style.color = 'black';
  };
  divToStyle.style.display = 'flex';
  divToStyle.style.flexWrap = 'Wrap';
  divToStyle.style.width = '215px';
  return divToStyle;
}

function styleText(element) {
  const pName = document.createElement('p');
  const pTitle = document.createElement('p');
  pName.textContent = element.fullName;
  pName.style.fontSize = '15px';
  pName.style.fontWeight = 'bolder';
  pName.style.textAlign = 'center';
  pTitle.textContent = element.title;
  pTitle.style.fontSize = '12px';
  return { pName, pTitle };
}

function stylePhoto(element) {
  const photo = document.createElement('img');
  photo.src = element.imageUrl;
  photo.alt = `Headshot of ${element.fullName}`;
  photo.className = 'mb-2';
  photo.style.width = '200px';
  photo.style.height = '200px';
  photo.style.objectFit = 'cover';
  return photo;
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = styleThroneDiv();
      const { pName, pTitle } = styleText(element);
      const photo = stylePhoto(element);
      div.appendChild(photo);
      div.appendChild(pName).appendChild(pTitle);
      throneSection.appendChild(div);
    });
  });

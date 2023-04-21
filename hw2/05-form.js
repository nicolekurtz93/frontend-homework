const form = document.querySelector('form');

function handleSubmission(evnt) {
  evnt.preventDefault(); // prevents screen from refreshing
  const courseList = [];
  const {
    name, email, registration, courses, comment, fullStackInput, operatingInput, languagesInput,
  } = form.elements;
  const label = '========= Form Submission =========';
  console.group(label);
  console.log(
    `${name.name} : ${name.value ? name.value : 'no submission'}`,
  );
  console.log(`${email.name} : ${email.value ? email.value : 'no submission'}`);
  console.log(`${registration.name} : ${registration.value ? registration.value : 'no submission'}`);
  if (fullStackInput.checked === true) {
    courseList.push(fullStackInput.labels[0].outerText);
  }
  if (operatingInput.checked === true) {
    courseList.push(operatingInput.labels[0].outerText);
  }
  if (languagesInput.checked === true) {
    courseList.push(languagesInput.labels[0].outerText);
  }
  console.log(`${courses[0].name} : ${courseList.length > 0 ? courseList : 'No Submission'}`);
  console.log(`${comment.name} : ${comment.value ? comment.value : 'no submission'}`);
  console.groupEnd(label);
}

form.addEventListener('submit', handleSubmission);

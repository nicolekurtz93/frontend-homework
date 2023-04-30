const form = document.querySelector('form');

function handleSubmission(event) {
  event.preventDefault(); // prevents screen from refreshing
  const courseList = [];
  const {
    name, email, registration, courses, comment, fullStackInput, operatingInput, languagesInput,
  } = form.elements;
  const label = '========= Form Submission =========';
  console.group(label);
  console.log(
    `${name.name} : ${name.value ? name.value : 'No submission'}`,
  );
  console.log(`${email.name} : ${email.value ? email.value : 'No submission'}`);
  console.log(`${registration.name} : ${registration.value ? registration.value : 'No submission'}`);
  const courseLabel = `${courses[0].name} :`;
  console.group(courseLabel);
  if (languagesInput.checked === true) {
    console.log(`${languagesInput.labels[0].outerText}`);
  }
  if (operatingInput.checked === true) {
    console.log(`${operatingInput.labels[0].outerText}`);
  }
  if (fullStackInput.checked === true) {
    console.log(`${fullStackInput.labels[0].outerText}`);
  }
  console.groupEnd(courseLabel);
  console.log(`${comment.name} : ${comment.value ? comment.value : 'No submission'}`);
  console.groupEnd(label);
}

form.addEventListener('submit', handleSubmission);

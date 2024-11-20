const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/submit-form');
  xhr.send(formData);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.log('There was an error submitting the form.');
    }
  };
});
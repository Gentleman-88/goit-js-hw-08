import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const messageArea = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button[type="submit"]');

function restoreFormData() {
  const savedFormData = localStorage.getItem("feedback-form-state");

  if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);
    email.value = parsedData.email || "";
    messageArea.value = parsedData.message || "";
  }
}

window.addEventListener('load', restoreFormData);

const throttledInputHandler = throttle(function () {
  const formData = {
    email: email.value,
    message: messageArea.value
  };
console.log(formData)
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

form.addEventListener('input', throttledInputHandler);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  localStorage.removeItem("feedback-form-state");

  const formData = {
    email: email.value,
    message: messageArea.value
  };
  console.log('Form submitted with values:');
  console.log(formData);

  email.value = "";
  messageArea.value = "";
});








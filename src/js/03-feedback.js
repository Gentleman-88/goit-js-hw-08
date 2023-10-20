import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const messageArea = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button[type="submit"]');

form.addEventListener('input', function (e) {
    const formData = {
        email: email.value,
        message: messageArea.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(formData);
});


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

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

form.addEventListener('input', throttledInputHandler);
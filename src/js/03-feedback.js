import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const button = document.querySelector(' button');


const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', onClickInput);
button.addEventListener('submit', onSubmitButton);

function onClickInput(e) {
const { email, message } = e.currentTarget.elements;

const emailUsage = `{email: ${ email.value } , message: ${message.value}}`;
   
  localStorage.setItem(STORAGE_KEY, emailUsage);
};
  
function onSubmitButton(e) {
  e.preventDefault();
console.log( `{email: ${ email.value } , message: ${message.value}}`);

  localStorage.removeItem(STORAGE_KEY);

  e.Target.reset();
 
};

 // function returnInput(e) {
//   const saveInput = localStorage.getItem(STORAGE_KEY);

//   form.elements.value = saveInput;
// }

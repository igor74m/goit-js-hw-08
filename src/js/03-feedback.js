import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

returnInput();

form.addEventListener('input',throttle(onClickInput, 500));
form.addEventListener('submit', onFormSubmit);


function onClickInput(e) {
  formData[e.target.name] = e.target.value;

   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
  
function onFormSubmit(e) {
  e.preventDefault();
 
  console.log( formData);

  localStorage.removeItem(STORAGE_KEY);

  e.currentTarget.reset();

};

function returnInput(e) {
   
  if (parsedData) {
    const formKeys = Object.keys(parsedData);

    formKeys.map(element => {
      document.querySelector(`[name='${element}']`)
        .value = parsedData[element]
 
    });
   
  };
 }




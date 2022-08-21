// import '../css/common.css';
// import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
formData = [];
const throttle = require('lodash.throttle');
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput,500));

populateText();

function onFormSubmit(evt) {
    evt.preventDefault();
    const storageObj = localStorage.getItem(STORAGE_KEY);
      console.log(JSON.parse(storageObj))
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
   
}



function onFormInput(evt) {
    
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
   
   
}
function populateText() {
    const saveInputForm = localStorage.getItem(STORAGE_KEY)
    if (saveInputForm) {
        const st = JSON.parse(saveInputForm)
        refs.textarea.value = st.message ;
        refs.email.value = st.email ;
    }
}

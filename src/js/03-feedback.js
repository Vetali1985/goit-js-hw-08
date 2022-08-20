import '../css/common.css';
import '../css/03-feedback.css';



const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onFormInput);
refs.email.addEventListener('input', onFormInput);


function onFormSubmit(evt) {
evt.preventDefault()

   console.log(evt.target.value)
}



function onFormInput(evt) {
    
    const message = evt.target.value;
    const email = evt.target.value
    console.log(message)
    console.log(email)
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: email,
        message: message
    }))
    const saveData = localStorage.getItem('feedback-form-state');
    const parseData=JSON.parse(saveData)
}
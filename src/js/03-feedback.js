import '../css/common.css';
import '../css/styles.css';



const refs = {
    form: document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea')
}
refs.form.addEventListener('submit', onSubmit);
refs.textarea.addEventListener('input', onInput);


function onSubmit(evt) {
evt.preventDefault()

   console.log(evt.target.value)
}



function onInput(evt) {
    
    const message = evt.currentTarget.value;
    console.log
   localStorage.setItem('feedback-form-state', message)
}
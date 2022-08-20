
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea:document.querySelector('.feedback-form textarea')
}
refs.form.addEventListener('submit', onSubmit);
refs.textarea.addEventListener('input', onInput);
function onSubmit(evt) {
   console.log()
}
function onInput(evt) {
    const message = evt.currentTarget.value;
   localStorage.setItem('feedback', message)
}
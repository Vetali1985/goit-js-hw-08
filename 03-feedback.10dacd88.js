const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(e.target.value)})),e.textarea.addEventListener("input",(function(e){const t=e.currentTarget.value;console.log,localStorage.setItem("feedback",t)}));
//# sourceMappingURL=03-feedback.10dacd88.js.map

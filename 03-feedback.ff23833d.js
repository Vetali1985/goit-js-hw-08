!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n="feedback-form-state";formData={};var r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=d||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,o,a,f,u,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function y(e){return l=e,u=setTimeout(T,t),d?v(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function T(){var e=b();if(O(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function h(e){return u=void 0,m&&r?v(e):(r=o=void 0,f)}function w(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return y(c);if(s)return u=setTimeout(T,t),v(c)}return void 0===u&&(u=setTimeout(T,t)),f}return t=j(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},w.flush=function(){return void 0===u?f:h(b())},w}function S(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=u.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):f.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};O.form.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(n);console.log(JSON.parse(t)),e.currentTarget.reset(),localStorage.removeItem(n)})),O.form.addEventListener("input",r((function(e){formData[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(formData))}),500)),function(){var e=localStorage.getItem(n);if(e){var t=JSON.parse(e);O.textarea.value=t.message,O.email.value=t.email}}()}();
//# sourceMappingURL=03-feedback.ff23833d.js.map

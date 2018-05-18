function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

function newEl(elm) {
  return document.createElement(elm);
}

function $on(target, type, cb, useCapture) {
  target.addEventListener(type, cb, !!useCapture);
}

export default { qs, qsa, $on, newEl };

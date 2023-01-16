"use strict";
const formEl = document.getElementById("info");
const heroEl = document.getElementById("hero")
const mainEl = document.getElementById("main")
const meddelandeEl = document.getElementById("meddelande");
const submitButtonEl = document.getElementById("submitButton");
const laddaOmBtnEl = document.getElementById("laddaOmBtn");

function formMessage() {
    formEl.style.display = "none";
    meddelandeEl.style.display = "flex";
    heroEl.style.display = "none";
    mainEl.style.height = "100vh";
}
function reload() {
    location.reload();
}
submitButtonEl.addEventListener("click", function (event) { event.preventDefault() });
submitButtonEl.addEventListener('click', formMessage);
laddaOmBtnEl.addEventListener('click', reload)

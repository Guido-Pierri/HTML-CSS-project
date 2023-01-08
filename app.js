
const knappMenyEl = document.getElementById("menyKnapp");
const menyEl = document.getElementById("navBar");

const mybutton = document.getElementById("topBtn");




//document.getElementById("submitButton").addEventListener("click",)

function visaMeny() {

    knappMenyEl.style.display = "none";
    menyEl.style.display = "flex";
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



knappMenyEl.addEventListener('click', visaMeny);
mybutton.addEventListener('click', topFunction);


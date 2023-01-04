const knappMenyEl = document.getElementById("menyKnapp");
const menyEl = document.getElementById("navBar")


function visaMeny() {

    knappMenyEl.style.display = "none";
    menyEl.style.display = "flex";
}

knappMenyEl.addEventListener('click', visaMeny);
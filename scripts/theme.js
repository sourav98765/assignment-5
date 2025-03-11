
const button = document.getElementById("theme-btn");
const body = document.body;


const colors = ["#F4F7FF", "#FFB6C1", "#FF474D", "#ADD8E6", "#90EE90",];
let i = 0;

button.addEventListener("click", function () {


    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
    body.style.backgroundColor = colors[i];
});
const page = document.getElementById('ticket-open-page');
let number = page.innerText;

function btn_prev() {
    number = (parseInt(number)%2) + 1;
    page.innerText = number;
}
function btn_next() {
    number = (parseInt(number)%2) + 1;
    page.innerText = number;
}
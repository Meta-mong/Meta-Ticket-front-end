const page = document.getElementById('ticket-open-page');
let number = page.innerText;


function btn_prev() {   
    const btn_prev = document.querySelector(".slick-prev");
    const btn_next = document.querySelector(".slick-next");
    
    btn_prev.setAttribute("disabled", "disabled");
    btn_next.setAttribute("disabled", "disabled");
    number = (parseInt(number)%2) + 1;
    page.innerText = number;
    console.log(page.innerText);
    setTimeout(function () {
        btn_prev.removeAttribute("disabled");
        btn_next.removeAttribute("disabled");
    }, 600)
    
}
function btn_next() {
    const btn_prev = document.querySelector(".slick-prev");
    const btn_next = document.querySelector(".slick-next");
    
    btn_prev.setAttribute("disabled", "disabled");
    btn_next.setAttribute("disabled", "disabled");
    number = (parseInt(number)%2) + 1;
    page.innerText = number;
    console.log(page.innerText);
    setTimeout(function () {
        btn_prev.removeAttribute("disabled");
        btn_next.removeAttribute("disabled");
    }, 600)
}
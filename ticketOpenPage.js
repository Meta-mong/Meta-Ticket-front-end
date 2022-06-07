const page = document.getElementById('ticket-open-page');
let number = page.innerText;

function btn_prev() {
    var btn = document.querySelector(".slick-prev");
    btn.addEventListener("click", function(e) {
        var vm = this;
        this.setAttribute("disabled", "disabled");

        setTimeout(function () {
            vm.removeAttribute("disabled")
        }, 800)
        number = (parseInt(number)%2) + 1;
        page.innerText = number;
    })
    
}
function btn_next() {
    var btn2 = document.querySelector(".slick-next");
    btn2.addEventListener("click", function(e) {
        var vm2 = this;
        this.setAttribute("disabled", "disabled");

        setTimeout(function () {
            vm2.removeAttribute("disabled")
        }, 800)
        number = (parseInt(number)%2) + 1;
        page.innerText = number;
    })
    
}
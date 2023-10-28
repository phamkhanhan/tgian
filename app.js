let second = document.getElementById("second");
let minute = document.getElementById("minute")
let b = 0
let c = 0
let a;
a = setInterval(function () {
    b = b + 1
    second.innerText = b
    if (b==10) {
        c = c + 1
        minute.innerText = c
        b=0
    }

}, 1000);

let stopbtn = document.getElementById("stop");
stopbtn.addEventListener("click", function () {
    clearInterval(a);
});



let start = document.getElementById("start");
start.addEventListener("click", function () {
    a = setInterval(function () {
        b = b + 1
        second.innerText = b
        if (b==10) {
            c = c + 1
            minute.innerText = c
            b=0
        }
    }, 1000);

});



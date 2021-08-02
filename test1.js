const wrapper = document.querySelector(".test1");

function func(event) {
    let outer = document.querySelector(".outer-circle");
    const elem = document.querySelector(".inner-circle");

    elem.style.left = event.clientX - parseInt(window.getComputedStyle(elem, "").width) / 2 + "px";
    elem.style.top = event.clientY - parseInt(window.getComputedStyle(elem, "").height) / 2 + "px";

    outer = window.getComputedStyle(outer);

    if (parseInt(elem.style.left) < 50) {
        elem.style.left = 50 + "px";
    } else if (parseInt(elem.style.left) > 570) {
        elem.style.left = 570 + "px";
    }

    if (parseInt(elem.style.top) < 50) {
        elem.style.top = 50 + "px";
    } else if (parseInt(elem.style.top) > 570) {
        elem.style.top = 570 + "px";
    }
}

wrapper.addEventListener("mousemove", func);

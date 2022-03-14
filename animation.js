let value = "up";

function SlideDown(el) {
    console.log("SlideDown");
    let elem = document.getElementById(el);
    elem.style.transition = "all 5s ease-in-out";
    elem.style.height = "100%";
}

function SlideUp(el) {
    console.log("SlideUp");
    let elem = document.getElementById(el);
    elem.style.transition = "all 5s ease-in-out";
    elem.style.height = "0px";
}

function Toggle(el) {
    if (value == "up") {
        console.log("up");
        SlideDown(el);
        value = "down";
    } else if (value == "down") {
        console.log("down");
        SlideUp(el);
        value = "up";
    }
}
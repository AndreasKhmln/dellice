function Init(el) {
    document.getElementById(el).style.display = "none";
}

function Toggle(el) {
    let elem = document.getElementById(el);
    if (elem.style.display == "none")
        elem.style.display = "block";
    else
        elem.style.display = "none";
}
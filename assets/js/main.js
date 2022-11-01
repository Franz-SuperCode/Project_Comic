

function changeColor(event) {
    event.preventDefault()

    let body = document.querySelector("body");
    body.classList.toggle("allBlack");

    document.querySelector(".containerHowItWorks").style.color = "black";
    document.querySelector(".a1").style.color = "white";
    document.querySelector(".a2").style.color = "white";
    document.querySelector(".a3").style.color = "white";
    document.querySelector(".a4").style.color = "white";


}
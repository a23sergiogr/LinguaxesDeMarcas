function increse(){
    let number=document.getElementById("number");
    number.innerText = parseInt(number.innerText) + 1;
    number.style.color = "green"
}
function decrese(){
    let number=document.getElementById("number");
    number.innerText = parseInt(number.innerText) - 1;
    number.style.color = "red"
}
function reset(){
    let number=document.getElementById("number");
    number.innerText = 0;
    number.style.color = "white"
}


function enter(e){
    if (e.key === 'Enter') {
      check()
    }
};

function check(){
    let name=document.getElementById("name");
    let result=document.getElementById("result");

    if (name.value == "butterfly"){
        result.style = "visibility: visible"
        result.style.borderColor = "#498B5A"
        result.style.backgroundColor = "#615443"
        result.style.color = "#2BE058" 

        result.textContent = "Bien hecho"
    }
    else{
        result.style = "visibility: visible"
        result.style.borderColor = "#8B403A"
        result.style.backgroundColor = "#384B61"
        result.style.color = "#E02212" 

        result.textContent = "Intenta otra vez"
    }

    
}

function reset(){
    let name=document.getElementById("name");
    let result=document.getElementById("result");

    name.value = ""

    result.style = "visibility: hidden"
}

//butterfly
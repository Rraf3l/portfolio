let botao = true
let atividade = document.getElementById("dropdownMenuButton1")
function Atividade(){
    if (botao == true){
        atividade.style.transition = "color 1s";
        atividade.style.color = "#010326"
        atividade.style.transition = "background-color 1s";
        atividade.style.backgroundColor = "#273859";
        botao = false
    }
    else{
        atividade.style.transition = "color 1s";
        atividade.style.color = "aliceblue"
        atividade.style.transition = "background-color 1s";
        atividade.style.backgroundColor = "#010326";
        botao = true
    }
}

function Insta(){
    window.open("https://www.instagram.com/raf.schmidt/");
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/rafael-dos-santos-schmidt-335228269/?originalSubdomain=br");
}
function Github(){
    window.open("https://github.com/Rraf3l");
}
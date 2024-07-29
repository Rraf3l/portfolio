document.addEventListener('DOMContentLoaded', (event) => {
    let botao = false;
    let atividade = document.getElementById("dropdownMenuButton1");

    function Atividade() {
        if (botao) {
            atividade.classList.remove('active');
            botao = false;
        } else {
            atividade.classList.add('active');
            botao = true;
        }
    }

    atividade.addEventListener('click', Atividade);

    document.addEventListener('click', function(event) {
        if (!atividade.contains(event.target) && !document.querySelector('.dropdown-menu').contains(event.target)) {
            if (botao) {
                atividade.classList.remove('active');
                botao = false;
            }
        }
    });
});


function Insta(){
    window.open("https://www.instagram.com/raf.schmidt/");
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/rafael-dos-santos-schmidt-335228269/?originalSubdomain=br");
}
function Github(){
    window.open("https://github.com/Rraf3l");
}
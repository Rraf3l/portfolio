/**
 * Alterna a exibição do menu suspenso ao clicar no botão correspondente.
 * @param {Event} event - O evento de clique no botão.
 * @param {string} dropdownId - O ID do menu suspenso a ser alternado.
 */
function toggleDropdown(event, dropdownId) {
    event.stopPropagation(); // Impede que o clique no botão feche o menu se for clicado fora

    // Fecha todos os menus suspensos, exceto o que foi clicado
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== dropdownId) {
            dropdown.classList.remove('show');
        }
    });

    // Alterna a visibilidade do menu suspenso clicado
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('show');
}

// Fecha todos os menus suspensos ao clicar fora deles
document.addEventListener('click', function() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});

// Seleciona todos os botões
const buttons = document.querySelectorAll('.atividade, .tecnico, .extra');

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede a propagação do clique para o documento
        
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    });
});

// Adiciona o evento de clique ao documento para resetar a cor de todos os botões
document.addEventListener('click', function() {
    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => button.classList.remove('active'));
});

// Obtém referências aos elementos HTML
const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('myAudio');

// Adiciona um ouvinte de evento ao botão
playButton.addEventListener('click', () => {
    // Verifica se o áudio está pausado
    if (myAudio.paused) {
        // Reproduz o áudio e altera o texto do botão para "Pausar Música"
        myAudio.play();
    } else {
        // Pausa o áudio e altera o texto do botão para "Tocar Música"
        myAudio.pause();
    }
});

// link para redes sociais e demais
function Insta(){
    window.open("https://www.instagram.com/raf.schmidt/");
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/rafael-dos-santos-schmidt-335228269/?originalSubdomain=br");
}
function Github(){
    window.open("https://github.com/Rraf3l");
}
function Youtube(){
    window.open("https://www.youtube.com/@QCDane");
}
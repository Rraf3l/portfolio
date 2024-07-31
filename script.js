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

function Insta(){
    window.open("https://www.instagram.com/raf.schmidt/");
}
function Linkedin(){
    window.open("https://www.linkedin.com/in/rafael-dos-santos-schmidt-335228269/?originalSubdomain=br");
}
function Github(){
    window.open("https://github.com/Rraf3l");
}
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('.conteudo');

    // Exibe apenas a seção com o ID correspondente
    function mostrarSecao(id) {
        // usa Lambda como callback no forEach
        sections.forEach(secao => {
            secao.style.display = (secao.id === id) ? 'flex' : 'none';
        });
    }

    mostrarSecao('sobre'); // Seção padrão ao carregar

    // Troca de seção ao clicar no menu
    links.forEach(link => {
        // usa Lambda para iterar sobre os links
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const secaoID = this.getAttribute('data-section');
            mostrarSecao(secaoID);
        });
    });
});

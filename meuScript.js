document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('.conteudo');

    function mostrarSecao(id) {
        sections.forEach(secao => {
            secao.style.display = (secao.id === id) ? 'flex' : 'none';
        });
    }

    // Mostrar "sobre" por padrão
    mostrarSecao('sobre');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const secaoID = this.getAttribute('data-section');
            mostrarSecao(secaoID);
        });
    });
});

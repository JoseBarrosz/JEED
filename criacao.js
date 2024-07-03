document.addEventListener('DOMContentLoaded', () => {
    const modalidades = document.querySelectorAll('.modalidade');

    modalidades.forEach(modalidade => {
        modalidade.addEventListener('click', () => {
            // Remove a classe 'selected' de todas as modalidades
            modalidades.forEach(mod => mod.classList.remove('selected'));
            // Adiciona a classe 'selected' à modalidade clicada
            modalidade.classList.add('selected');
        });
    });
});

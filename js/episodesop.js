document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);

        themeToggle.innerHTML = theme === 'dark-mode' ? '<i class="fas fa-adjust"></i> Modo Claro' : '<i class="fas fa-adjust"></i> Modo Escuro';
    });

    themeToggle.innerHTML = currentTheme === 'dark-mode' ? '<i class="fas fa-adjust"></i> Modo Claro' : '<i class="fas fa-adjust"></i> Modo Escuro';
});

function openTrailer(trailerUrl) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    // Adiciona o vídeo ao modal
    modalBody.innerHTML = `
        <iframe width="560" height="315" src="${trailerUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = ''; // Limpa o conteúdo do modal
    modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-mode';

    // Aplica o tema salvo ao carregar a página
    document.body.classList.add(currentTheme);

    // Atualiza o texto do botão com base no tema atual
    themeToggle.innerHTML = currentTheme === 'dark-mode'
        ? '<i class="fas fa-adjust"></i> Modo Claro'
        : '<i class="fas fa-adjust"></i> Modo Escuro';

    // Alterna entre os temas ao clicar no botão
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';

        // Salva o tema no localStorage
        localStorage.setItem('theme', theme);

        // Atualiza o texto do botão
        themeToggle.innerHTML = theme === 'dark-mode'
            ? '<i class="fas fa-adjust"></i> Modo Claro'
            : '<i class="fas fa-adjust"></i> Modo Escuro';
    });
});

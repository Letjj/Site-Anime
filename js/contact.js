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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    this.reset();
});
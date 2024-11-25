// Função para abrir o trailer no modal
function openTrailer(url) {
    // Seleciona o modal e a área do corpo do modal
    let modal = document.getElementById("modal");
    let modalBody = document.getElementById("modal-body");
    
    // Cria o iframe para embutir o vídeo do YouTube
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%"; // Torna o iframe responsivo ao tamanho do modal

    // Limpa o conteúdo atual do modal e adiciona o novo iframe
    modalBody.innerHTML = ""; // Remove qualquer conteúdo anterior
    modalBody.appendChild(iframe); // Adiciona o novo vídeo
    
    // Exibe o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
    // Limpa o conteúdo do modal quando fechado (retira o iframe)
    let modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = "";
}

// Adiciona o comportamento de fechamento do modal quando se clicar no "x" ou fora da área do modal
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    // Verifica se o clique foi fora da área do modal (no fundo)
    if (event.target == modal) {
        closeModal();
    }
}

// Ativa o tema escuro ou claro
let themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    // Alterna a classe 'dark-theme' no body para ativar/desativar o tema escuro
    document.body.classList.toggle("dark-theme");
});

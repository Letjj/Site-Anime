// Aguarda até que o DOM esteja totalmente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos HTML que vamos manipular no código
    const themeToggle = document.getElementById('theme-toggle');  // Botão de alternância de tema
    const body = document.body;                                  // Corpo da página (para alterar o fundo e o texto)
    const header = document.querySelector('header');              // Cabeçalho da página
    const bannerH1 = document.querySelector('.banner h1');        // Título dentro do banner
    const content = document.querySelector('.content');           // Seção de conteúdo principal
    
    // Recupera o tema armazenado no localStorage ou usa o tema claro como padrão
    const savedTheme = localStorage.getItem('theme') || 'light-mode';  
    // Se um tema foi armazenado no localStorage, ele será usado. Caso contrário, 'light-mode' será o tema padrão.

    // Define o tema inicial com base no tema armazenado no localStorage
    body.classList.add(savedTheme);  // Adiciona a classe 'light-mode' ou 'dark-mode' ao body
    header.classList.add(savedTheme);  // Adiciona a mesma classe ao cabeçalho
    bannerH1.classList.add(savedTheme); // Adiciona a mesma classe ao título do banner
    content.classList.add(savedTheme);  // Adiciona a mesma classe à seção de conteúdo

    // Atualiza o texto e ícone do botão de alternância com base no tema atual
    updateThemeButtonText(savedTheme);  // Chama a função para atualizar o texto do botão de alternância

    // Função que alterna entre os modos claro e escuro quando o botão de alternância é clicado
    themeToggle.addEventListener('click', () => {
        // Verifica se o tema atual é 'dark-mode'
        if (body.classList.contains('dark-mode')) {
            // Se o tema for 'dark-mode', altera para 'light-mode'
            body.classList.remove('dark-mode');  // Remove a classe 'dark-mode' do body
            body.classList.add('light-mode');    // Adiciona a classe 'light-mode' ao body
            header.classList.remove('dark-mode');
            header.classList.add('light-mode');
            bannerH1.classList.remove('dark-mode');
            bannerH1.classList.add('light-mode');
            content.classList.remove('dark-mode');
            content.classList.add('light-mode');
            
            // Salva o tema atual no localStorage para persistir entre as recargas da página
            localStorage.setItem('theme', 'light-mode');
        } else {
            // Caso contrário, se o tema for 'light-mode', altera para 'dark-mode'
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            header.classList.remove('light-mode');
            header.classList.add('dark-mode');
            bannerH1.classList.remove('light-mode');
            bannerH1.classList.add('dark-mode');
            content.classList.remove('light-mode');
            content.classList.add('dark-mode');
            
            // Salva o tema atual no localStorage
            localStorage.setItem('theme', 'dark-mode');
        }
        
        // Atualiza o texto e ícone do botão de alternância com base no novo tema
        updateThemeButtonText(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });

    // Função para atualizar o texto e o ícone do botão de alternância
    function updateThemeButtonText(theme) {
        // Se o tema for 'dark-mode', altera o texto do botão para "Modo Claro" e o ícone
        if (theme === 'dark-mode') {
            themeToggle.innerHTML = '<i class="fas fa-adjust"></i> Modo Claro';  // Atualiza o texto e ícone
        } else {
            // Caso contrário, altera para "Modo Escuro" e o ícone correspondente
            themeToggle.innerHTML = '<i class="fas fa-adjust"></i> Modo Escuro';
        }
    }

    // Configura o botão de fechar do modal
    const closeButton = document.querySelector('.close'); // Seleciona o botão de fechar do modal
    const modal = document.getElementById('modal');        // Seleciona o modal

    // Verifica se o botão de fechar existe e adiciona um evento ao clique para chamar a função closeModal()
    if (closeButton) {
        closeButton.addEventListener('click', closeModal); // Fecha o modal quando o botão é clicado
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none'; // Altera a exibição do modal para 'none', fechando-o
    }
});

// Função para abrir o modal com conteúdo dinâmico baseado no personagem
function openModal(character) {
    const modal = document.getElementById('modal'); // Seleciona o modal
    const modalBody = document.getElementById('modal-body'); // Seleciona a área onde o conteúdo será injetado
    let content = ''; // Inicializa o conteúdo como vazio

    // Gera o conteúdo com base no personagem clicado
    if (character === 'luffy') {
        content = `
            <h2>Monkey D. Luffy</h2>
            <img src="https://th.bing.com/th/id/OIP.iw5jbzns94t5btKiFoek6gHaD5?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Monkey D. Luffy">
            <p>Luffy é cheio de energia e determinação, ele sonha em se tornar o Rei dos Piratas e encontrar o lendário tesouro, o One Piece.</p>
        `;
    } else if (character === 'sanji') {
        content = `
            <h2>Vinsmoke Sanji</h2>--
            <img src="https://th.bing.com/th/id/OIP.2aNnYaTYcytcd1ECkIzsdwHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Vinsmoke Sanji">
            <p>Sanji é um cozinheiro com habilidades excepcionais e um  profundo amor pelas mulheres, seu sonho é encontrar o all blue.</p>
        `;


    } else if (character === 'zoro') {
        content = `
            <h2>Roronoa Zoro</h2>
            <img src="https://th.bing.com/th/id/OIP.crvcfdef4HdFmGbOzB-k9AHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Roronoa Zoro">
            <p>Zoro é um espadachim talentoso, leal e determinado, seu sonho é se tornar o melhor espadachim do mundo.</p>
        `;
    } else if (character === 'nami') {
        content = `
            <h2>Satorou Gojo</h2>
            <img src="https://th.bing.com/th/id/OIP.bIQys4OoqQr8V2p3bPsJngHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Nami">
            <p>Nami é uma navegadora, uma amiga leal, uma guerreira corajosa e um símbolo de esperança para seus companheiros, seu conho é desenhar o mapa mundi. </p>
        `;
    } else if (character === 'usopp') {
        content = `
            <h2>God Usopp</h2>
            <img src="https://th.bing.com/th/id/OIP.xcXf7B_vevJNG2AnEMe_GwHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="God Usopp">
            <p>Usopp é um atirador divertido, que combina humor, coragem e um coração puro, seu sonho é se tornar um bravo guerreiro do mar.</p>
        `;
    } else if (character === 'chopper') {
        content = `
            <h2>Tony Tony Chopper</h2>
            <img src="https://th.bing.com/th/id/OIP.gV8FDpFQXmYQpGqfcJ5rPQHaNK?rs=1&pid=ImgDetMain" alt="Tony Tony Chopper">
            <p>Chopper apesar de sua aparência de rena é médico, possui uma inteligência e um coração imensos, seu sonho é encontrar a cura para todas as doenças.</p>
        `;
} else if (character === 'robin') {
    content = `
        <h2>Nico Robin</h2>
        <img src="data:image/jpeg;base64,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" alt="Nico Robin">
        <p>Robin é uma arqueóloga fascinate, a única que consegue ler os poniglifes, seu sonho é descobrir o que aconteceu no século perdido.</p>
    `;
} else if (character === 'franky') {
    content = `
        <h2>Cutty Flam (Franky)</h2>
        <img src="https://th.bing.com/th/id/OIP.yIFTnYSEnqNue40Mpd3dpAHaF7?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Cutty Flam">
        <p>Franky é carpinteiro e um  cyborg com um coração de ouro e um grande conhecimento em mecânica, seu sonho é construir o navio mais incrivel do mundo.</p>
    `;
} else if (character === 'brook') {
    content = `
        <h2>Brook</h2>
        <img src="https://th.bing.com/th/id/OIP.umG-aIfjHI2s1WmzYtUeewHaKe?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Brook">
        <p>Brook é um músico, um esqueleto que comeu a Fruta do Diabo Yomi Yomi no Mi, voltando à vida após a morte, seu sonho é reencontrar Laboon.</p>
    `;
}  else if (character === 'jinbei') {
    content = `
        <h2>Jinbei-zame</h2>
        <img src="https://th.bing.com/th/id/OIP.qL6swyxJRuqhRFKDBuNA0wHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Jinbei">
        <p>Jinbei é o timoneiro, um homem-peixe forte e leal, seu sonho é a coexistência pacífica entre humanos e homens-peixe.</p>
    `;

}  else if (character === 'ace') {
    content = `
        <h2>Portugas D. Ace</h2>
        <img src="https://th.bing.com/th/id/OIP.AHn12ts-LdZwr2lQIZbjcAHaKJ?w=131&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Portugas D. Ace">
        <p>Ace era o irmão do meio de Luffy, leal e carismático, seu sonho era ser livre.</p>
    `;



    // Insere o conteúdo gerado no corpo do modal
    modalBody.innerHTML = content;

    // Exibe o modal definindo seu estilo como 'flex'
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    // Esconde o modal definindo seu estilo como 'none'
    document.getElementById('modal').style.display = 'none';
}
}
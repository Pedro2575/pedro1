// script.js
let storyText = document.getElementById('story-text');
let storyImage = document.getElementById('story-image');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');

// Primeira decisão: explorar ou seguir o som
option1.addEventListener('click', function() {
    storyText.textContent = "Você explora mais a floresta e encontra uma caverna. O que você faz?";
    storyImage.src = "caverna.jpg"; // Troca para a imagem da caverna
    option1.textContent = "Entrar na caverna";
    option2.textContent = "Continuar andando";

    option1.onclick = entrarCaverna;
    option2.onclick = continuarFloresta;
});

option2.addEventListener('click', function() {
    storyText.textContent = "Você segue o som da cachoeira e encontra um rio. O que você faz?";
    storyImage.src = "cachoeira.jpg"; // Troca para a imagem da cachoeira
    option1.textContent = "Tentar nadar";
    option2.textContent = "Procurar uma ponte";

    option1.onclick = nadarRio;
    option2.onclick = procurarPonte;
});

// Funções para o progresso da história
function entrarCaverna() {
    storyText.textContent = "Você entra na caverna e encontra um dragão adormecido. O que você faz?";
    storyImage.src = "dragao.jpg"; // Troca para a imagem do dragão
    option1.textContent = "Roubar o tesouro";
    option2.textContent = "Sair silenciosamente";

    option1.onclick = roubarTesouro;
    option2.onclick = sairSilenciosamente;
}

function continuarFloresta() {
    storyText.textContent = "Você continua andando e encontra uma vila mágica. Parabéns, você está salvo!";
    storyImage.src = "vila.jpg"; // Troca para a imagem da vila
    option1.style.display = 'none';
    option2.style.display = 'none';
}

function nadarRio() {
    storyText.textContent = "A correnteza é forte, mas você consegue atravessar o rio. Você está salvo!";
    storyImage.src = "rio.jpg"; // Troca para a imagem do rio
    option1.style.display = 'none';
    option2.style.display = 'none';
}

function procurarPonte() {
    storyText.textContent = "Você encontra uma ponte segura e atravessa o rio com sucesso. Parabéns!";
    storyImage.src = "ponte.jpg"; // Troca para a imagem da ponte
    option1.style.display = 'none';
    option2.style.display = 'none';
}

function roubarTesouro() {
    storyText.textContent = "Você tenta roubar o tesouro, mas o dragão acorda e te captura. Fim da aventura.";
    storyImage.src = "derrota.jpg"; // Troca para a imagem de derrota
    option1.style.display = 'none';
    option2.style.display = 'none';
}

function sairSilenciosamente() {
    storyText.textContent = "Você sai da caverna em silêncio e continua sua jornada. Parabéns, você está salvo!";
    storyImage.src = "floresta.jpg"; // Volta para a imagem da floresta
    option1.style.display = 'none';
    option2.style.display = 'none';
}

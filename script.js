// =====================
// ANO AUTOMÁTICO NO RODAPÉ
// Pega o ano atual do sistema e coloca no <span id="ano">
// Assim o rodapé nunca fica desatualizado
// =====================
document.getElementById('ano').textContent = new Date().getFullYear();

// =====================
// MENU MOBILE (hamburguer)
// =====================

// Seleciona o botão hamburguer e a nav pelo id
const menuToggle = document.getElementById('menuToggle');
const navegacao = document.getElementById('navegacao');

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu-link');

// Ao clicar no botão hamburguer:
menuToggle.addEventListener('click', () => {
    // toggle adiciona a classe se não tiver, remove se já tiver
    menuToggle.classList.toggle('ativo');   // Anima as linhas virando X
    navegacao.classList.toggle('aberto');   // Abre/fecha o menu (CSS: max-height)
});

// Ao clicar em qualquer link do menu, fecha o menu
// (importante no mobile para não ficar com o menu aberto)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('ativo');
        navegacao.classList.remove('aberto');
    });
});

// =====================
// FORMULÁRIO — ENVIO VIA WHATSAPP
// =====================

// Seleciona os campos do formulário pelo id
const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

// Número do WhatsApp no formato internacional (sem + ou espaços)
// 55 = Brasil, 11 = DDD São Paulo
const telefone = '5511975227602';

function enviarMensagem(event) {
    // Impede o comportamento padrão do form (recarregar a página)
    event.preventDefault();

    // trim() remove espaços em branco do início e fim
    // Evita enviar mensagens com só espaços
    if (!nome.value.trim() || !mensagem.value.trim()) {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return; // Para a execução da função aqui
    }

    // Monta o texto da mensagem
    const texto = `Olá, me chamo ${nome.value.trim()}. ${mensagem.value.trim()}`;

    // encodeURIComponent converte caracteres especiais para URL
    // Ex: espaço vira %20, ç vira %C3%A7
    const msgFormatada = encodeURIComponent(texto);

    // Monta o link do WhatsApp com o número e a mensagem já preenchida
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');

    // Limpa os campos após o envio
    nome.value = '';
    mensagem.value = '';
}

// Escuta o evento de submit do formulário e chama a função
document.getElementById('formulario').addEventListener('submit', enviarMensagem);
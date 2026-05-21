// =====================
// MENU MOBILE (hamburguer)
// =====================
const menuToggle = document.getElementById('menuToggle');
const navegacao = document.getElementById('navegacao');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('ativo');
    navegacao.classList.toggle('aberto');
});

// Fechar menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('ativo');
        navegacao.classList.remove('aberto');
    });
});

// =====================
// FORMULÁRIO — WHATSAPP
// =====================
const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

// Número do WhatsApp (sem o símbolo +)
const telefone = '5511975227602';

function enviarMensagem(event) {
    event.preventDefault();

    // Validação: campos não podem estar vazios
    if (!nome.value.trim() || !mensagem.value.trim()) {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return;
    }

    const texto = `Olá, me chamo ${nome.value.trim()}. ${mensagem.value.trim()}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');

    // Limpar formulário após envio
    nome.value = '';
    mensagem.value = '';
}

document.getElementById('formulario').addEventListener('submit', enviarMensagem);

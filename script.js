const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5511975227602';

function enviarMensagem(event) {
    const texto = `Olá, me chamo ${nome.value}. ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
    event.preventDefault();
}

document.getElementById('formulario').addEventListener('submit', enviarMensagem);

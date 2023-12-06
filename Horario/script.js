const texto = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', function() {
    setInterval(atualizarDataHora, 1000);
    atualizarDataHora();
});

function atualizarDataHora() {
    const dataAtual = new Date();
    const formatoData = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', formatoData);
    texto.textContent = dataFormatada;
}
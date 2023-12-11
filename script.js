class Cronometro {
    constructor() {
        this.tempoTotal = 0;
        this.intervalo = 0;
        this.tempoElemento = document.getElementById('tempo');
    }

    iniciar() {
        this.intervalo = setInterval(() => {
            this.tempoTotal++;
            this.atualizarTempo();
        }, 1000);
    }

    pausar() {
        clearInterval(this.intervalo);
    }

    reiniciar() {
        clearInterval(this.intervalo);
        this.tempoTotal = 0;
        this.atualizarTempo();
    }

    atualizarTempo() {
        const horas = Math.floor(this.tempoTotal / 3600);
        const minutos = Math.floor((this.tempoTotal % 3600) / 60);
        const segundos = this.tempoTotal % 60;
        this.tempoElemento.textContent = `${this.formatarNumero(horas)}:${this.formatarNumero(minutos)}:${this.formatarNumero(segundos)}`;
    }

    formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }
}

const cronometro = new Cronometro();

document.getElementById('botaoIniciar').addEventListener('click', () => {
    cronometro.iniciar();
});

document.getElementById('botaoPausar').addEventListener('click', () => {
    cronometro.tempoElemento.style.backgroundColor = 'red';
    cronometro.pausar();
    setTimeout(() => {
        cronometro.tempoElemento.style.backgroundColor = '';
    }, 1000);
});

document.getElementById('botaoReiniciar').addEventListener('click', () => {
    cronometro.reiniciar();
});

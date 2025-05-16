class Parquimetro {
    constructor() {
        this.valorPor30Min = 1.00;
    }

    calcular() {
        const valorInserido = parseFloat(document.getElementById("valor").value);
        const mensagem = document.getElementById("mensagem");

        if (isNaN(valorInserido)) {
            mensagem.textContent = "Digite um valor válido.";
            return;
        }

        if (valorInserido < 1.00) {
            mensagem.textContent = "Valor insuficiente!";
            return;
        }

        const blocosDe30Min = Math.floor(valorInserido / this.valorPor30Min);
        const tempoTotalMinutos = blocosDe30Min * 30;
        const horas = Math.floor(tempoTotalMinutos / 60);
        const minutos = tempoTotalMinutos % 60;

        const valorGasto = blocosDe15Min * this.valorPor15Min;
        const troco = (valorInserido - valorGasto).toFixed(2);

        let texto = `Tempo: ${horas}h ${minutos}min`;
        texto += ` - Troco: R$${troco.replace('.', ',')}`;

        mensagem.textContent = texto;
    }
}

const parquimetro = new Parquimetro();

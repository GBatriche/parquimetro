class Parquimetro {
    constructor() {
        this.valorPor30Min = 1.00;
        this.valorMaximo = 3.00
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
        const valorConsiderado = Math.min(valorInserido, this.valorMaximo);
        const blocosDe30Min = Math.floor(valorConsiderado / this.valorPor30Min);
        const tempoTotalMinutos = blocosDe30Min * 30;
        const horas = Math.floor(tempoTotalMinutos / 60);
        const minutos = tempoTotalMinutos % 60;

        const valorGasto = blocosDe30Min * this.valorPor30Min;
        const troco = (valorInserido - valorGasto).toFixed(2);

        let texto = `Tempo: ${horas}h ${minutos}min`;
        if (valorInserido > this.valorMaximo) {
            texto += ` (Tempo máximo atingido)`;
        }
        if (troco > 0) {
            texto += ` - Troco: R$${troco.replace('.', ',')}`;
        }

        mensagem.textContent = texto;
    }
}
const parquimetro = new Parquimetro();
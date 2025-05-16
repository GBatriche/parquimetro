class Parquimetro {
    constructor() {
        this.tabela = [
            { valor: 3.00, tempo: "2h" },
            { valor: 1.75, tempo: "1h" },
            { valor: 1.00, tempo: "30min" }
        ];
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

        let tempo = null;
        let valorGasto = 0;

        for (let item of this.tabela) {
            if (valorInserido >= item.valor) {
                tempo = item.tempo;
                valorGasto = item.valor;
                break;
            }
        }

        const troco = (valorInserido - valorGasto).toFixed(2).replace('.', ',');

        let texto = `Tempo: ${tempo}`;
        if (valorInserido > valorGasto) {
            texto += ` - Troco: R$${troco}`;
        }

        mensagem.textContent = texto;
    }
}

const parquimetro = new Parquimetro();

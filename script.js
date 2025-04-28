function calcularPreco() {
    const custo = parseFloat(document.getElementById('custo').value);
    let precoVenda = 0;

    if (isNaN(custo) || custo <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (custo < 100) {
        precoVenda = custo / 0.5;
    } else if (custo <= 150) {
        precoVenda = custo / 0.55;
    } else if (custo <= 180) {
        precoVenda = custo / 0.6;
    } else if (custo <= 200) {
        precoVenda = custo / 0.65;
    } else {
        precoVenda = custo / 0.7;
    }

    document.getElementById('resultado').innerHTML = `Preço de venda é: R$ ${precoVenda.toFixed(2)}`;
}

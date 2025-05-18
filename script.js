function calcularPreco() {
    const custo = parseFloat(document.getElementById('custo').value);
    const productType = document.querySelector('input[name="productType"]:checked').value;
    let precoVenda = 0;

    if (isNaN(custo) || custo <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (productType === 'perfume') {
        // Lógica para perfumes
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
    } else {
        // Lógica para smartwatches
        if (custo < 130) {
            precoVenda = custo / 0.5;
        } else if (custo >= 150 && custo <= 170) {
            precoVenda = custo / 0.55;
        } else if (custo >= 200 && custo <= 220) {
            precoVenda = custo / 0.6;
        } else if (custo >= 250) {
            precoVenda = custo / 0.65;
        } else {
            // Para valores entre 130-150, 170-200, 220-250
            precoVenda = custo / 0.55;
        }
    }

    document.getElementById('resultado').innerHTML = `Preço de venda é: R$ ${precoVenda.toFixed(2)}`;
}
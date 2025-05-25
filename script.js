function calcularPreco() {
    const custo = parseFloat(document.getElementById('custo').value);
    const productType = document.querySelector('input[name="productType"]:checked').value;
    const frete = 7 / 0.96; // Frete fixo com divisor
    let precoSemFrete = 0;
    let precoComFrete = 0;

    if (isNaN(custo) || custo <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (productType === 'perfume') {
        if (custo < 100) {
            precoSemFrete = custo / 0.5;
        } else if (custo <= 150) {
            precoSemFrete = custo / 0.55;
        } else if (custo <= 180) {
            precoSemFrete = custo / 0.6;
        } else if (custo <= 200) {
            precoSemFrete = custo / 0.65;
        } else {
            precoSemFrete = custo / 0.7;
        }
    } else {
        // Smartwatches
        if (custo < 130) {
            precoSemFrete = custo / 0.5;
        } else if (custo >= 150 && custo <= 170) {
            precoSemFrete = custo / 0.55;
        } else if (custo >= 200 && custo <= 220) {
            precoSemFrete = custo / 0.6;
        } else if (custo >= 250) {
            precoSemFrete = custo / 0.65;
        } else {
            precoSemFrete = custo / 0.55;
        }
    }

    precoComFrete = precoSemFrete + frete;

    document.getElementById('resultado').innerHTML = `
        <strong>Preço sem frete:</strong> R$ ${precoSemFrete.toFixed(2)}<br>
        <strong>Preço com frete:</strong> R$ ${precoComFrete.toFixed(2)}<br>
        <small>Frete fixo calculado como R$7 / 0.96 = R$ ${frete.toFixed(2)}</small>
    `;
}

function calcularPreco() {
    const custo = parseFloat(document.getElementById('custo').value);
    const productType = document.querySelector('input[name="productType"]:checked').value;
    const frete = 7 / 0.96; // Frete fixo padrão para varejo
    let precoSemFrete = 0;
    let precoComFrete = 0;
    let tipoVenda = "Varejo"; // padrão
    let infoLucro = "";

    if (isNaN(custo) || custo <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    // ---------------- VAREJO ----------------
    if (productType === 'perfume') {
        tipoVenda = "Varejo";
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
        precoComFrete = precoSemFrete + frete;
        infoLucro = "Margem variável conforme custo + frete fixo";
    } 
    else if (productType === 'smartwatch') {
        tipoVenda = "Varejo";
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
        precoComFrete = precoSemFrete + frete;
        infoLucro = "Margem variável conforme custo + frete fixo";
    } 

    // ---------------- ATACADO ----------------
    else if (productType === 'hidratante') {
        tipoVenda = "Atacado";
        precoSemFrete = custo / 0.74; // 26% lucro
        precoComFrete = precoSemFrete / 0.98; // +2% frete
        infoLucro = "Lucro: 26% + Frete: 2%";
    } 
    else if (productType === 'perfume25') {
        tipoVenda = "Atacado";
        precoSemFrete = custo / 0.72; // 28% lucro
        precoComFrete = precoSemFrete / 0.98; // +2% frete
        infoLucro = "Lucro: 28% + Frete: 2%";
    } 
    else if (productType === 'perfume80_100') {
        tipoVenda = "Atacado";
        precoSemFrete = custo / 0.75; // 25% lucro
        precoComFrete = precoSemFrete / 0.98; // +2% frete
        infoLucro = "Lucro: 25% + Frete: 2%";
    }

    // ---------------- Resultado ----------------
    document.getElementById('resultado').innerHTML = `
        <strong>Tipo de venda:</strong> ${tipoVenda}<br>
        <strong>Preço sem frete:</strong> R$ ${precoSemFrete.toFixed(2)}<br>
        <strong>Preço com frete:</strong> R$ ${precoComFrete.toFixed(2)}<br>
        <small>${infoLucro}</small><br>
        ${tipoVenda === "Varejo" ? `<small>Frete fixo = R$7 / 0.96 = R$ ${frete.toFixed(2)}</small>` : ""}
    `;
}

function showTab(tab) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}

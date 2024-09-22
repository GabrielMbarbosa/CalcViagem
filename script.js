function calcular() {
    const litroGas = parseFloat(document.getElementById('kmLitro').value);
    const rodadoDist = parseFloat(document.getElementById('KmRodado').value);
    const precoCombus = parseFloat(document.getElementById('precoCombustivel').value);
    const veloMedia = parseFloat(document.getElementById('VelMedia').value);

    if (isNaN(litroGas) || isNaN(rodadoDist) || isNaN(precoCombus) || isNaN(veloMedia)) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    const combustivelGasto = rodadoDist / litroGas;
    const custoTotal = combustivelGasto * precoCombus;
    const tempoViagem = rodadoDist / veloMedia;

    document.getElementById('resultado').innerHTML = `<div class='res'>
    <p id='pes'>Você precisara de ${combustivelGasto.toFixed(2)} litros para andar ${rodadoDist.toFixed(2)} km</p>
    <p id='pes'>O custo de ${combustivelGasto.toFixed(2)} Litros de Combustivel será de R$ ${custoTotal.toFixed(2)}</p>
    <p id='pes'>Você levara ${tempoViagem.toFixed(2)} horas para chegar no seu destino a uma valocidade media de ${veloMedia} km\\h<p></div>`;
    
    resultado.style.display = 'flex';

}
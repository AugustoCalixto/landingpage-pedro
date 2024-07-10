const taxaAstro = 0.02; // Exemplo de taxa de 2%
const taxaConcorrencia = 0.03; // Exemplo de taxa de 3%

const faturamento = document.querySelector('#faturamento');
const parcelas = document.querySelector('#parcelas');

function calcular() {

  const faturamento = parseFloat(document.getElementById('faturamento').value);
  const parcelamento = parseInt(document.getElementById('parcelas').value);

  if (isNaN(faturamento) || faturamento <= 0) {
    alert('Por favor, insira um valor de faturamento válido.');
    return;
  }

  // Calcula a taxa de acordo com o parcelamento (exemplo simplificado)
  const taxaAstroTotal = taxaAstro * parcelamento;
  const taxaConcorrenciaTotal = taxaConcorrencia * parcelamento;

  const recebimentoAstro = faturamento - (faturamento * taxaAstroTotal);
  const recebimentoConcorrencia = faturamento - (faturamento * taxaConcorrenciaTotal);
  const economia = recebimentoAstro - recebimentoConcorrencia;

  document.getElementById('resultadoAstro').innerText = recebimentoAstro.toFixed(2);
  document.getElementById('resultadoConcorrencia').innerText = recebimentoConcorrencia.toFixed(2);
  document.getElementById('economia').innerText = economia.toFixed(2);
}


faturamento.addEventListener('change', calcular);
parcelas.addEventListener('change', calcular);

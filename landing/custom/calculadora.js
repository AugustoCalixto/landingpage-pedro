const taxaAstro = 0.02; // Exemplo de taxa de 2%
const taxaConcorrencia = 0.03; // Exemplo de taxa de 3%

const taxasParcelamento = {
  1: 0.0472,
  2: 0.0651,
  3: 0.0750,
  4: 0.0846,
  5: 0.0940,
  6: 0.1035,
  7: 0.1141,
  8: 0.1231,
  9: 0.1320,
  10: 0.1414,
  11: 0.1505,
  12: 0.1594,
  13: 0.1682,
  14: 0.1771,
  15: 0.1860,
  16: 0.1945,
  17: 0.2034,
  18: 0.2115
};


function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

function formatarInputParaMoeda(event) {
  const input = event.target;
  let valor = input.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
  valor = (valor / 100).toFixed(2); // Divide por 100 para considerar as casas decimais
  input.value = formatarMoeda(valor);
}

function extrairValorComoFloat(valorFormatado) {
  const valorNumerico = valorFormatado
    .replace(/[^\d,]/g, '') // Remove todos os caracteres que não são dígitos ou vírgula
    .replace(',', '.'); // Substitui a vírgula pelo ponto decimal

  return parseFloat(valorNumerico);
}


const div_faturamento = document.getElementById('faturamento');
div_faturamento.addEventListener('change', formatarInputParaMoeda);


function calcular() {
  const faturamento = extrairValorComoFloat(document.getElementById('faturamento').value);
  const parcelamento = parseInt(document.getElementById('parcelas').value);


  if (isNaN(faturamento) || faturamento <= 0) {
    document.getElementById('resultadoAstro').innerText = 0;
    document.getElementById('resultadoConcorrencia').innerText = 0;
    document.getElementById('economia').innerText = 0;
  }

  const taxaParcelamentoAstro = taxasParcelamento[parcelamento] || 0;
  const taxaAstroTotal = taxaAstro + taxaParcelamentoAstro;
  const taxaConcorrenciaTotal = taxaConcorrencia * parcelamento;

  const recebimentoAstro = faturamento - (faturamento * taxaAstroTotal);
  const recebimentoConcorrencia = faturamento - (faturamento * taxaConcorrenciaTotal);
  const economia = recebimentoConcorrencia - recebimentoAstro;

  document.getElementById('resultadoAstro').innerText = recebimentoAstro.toFixed(2);
  document.getElementById('resultadoConcorrencia').innerText = recebimentoConcorrencia.toFixed(2);
  document.getElementById('economia').innerText = economia.toFixed(2);
}


function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

function desformatarMoeda(valorFormatado) {
  return valorFormatado
    .replace(/[^\d,]/g, '') // Remove todos os caracteres que não são dígitos ou vírgula
    .replace(',', '.'); // Substitui a vírgula pelo ponto decimal
}

function formatarInputParaMoeda(event) {
  const input = event.target;
  let valor = input.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
  valor = (valor / 100).toFixed(2); // Divide por 100 para considerar as casas decimais
  input.value = formatarMoeda(valor);
  calcular();
}

function handleFocus(event) {
  const input = event.target;
  let valor = input.value.replace(/\D/g, '');
  valor = (valor / 100).toFixed(2);
  input.value = valor.replace('.', ',');
}

function handleBlur(event) {
  formatarInputParaMoeda(event);
}

const faturamento = document.getElementById('faturamento');
const parcelas = document.getElementById('parcelas');
parcelas.addEventListener('change', calcular);
faturamento.addEventListener('input', formatarInputParaMoeda);
faturamento.addEventListener('focus', handleFocus);
faturamento.addEventListener('blur', handleBlur);

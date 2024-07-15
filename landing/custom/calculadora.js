let TAXA_COMPARACAO = "astro";
let QTD_PARCELAS = 1;
const taxasParcelamento = [
  0,
  0.0472,
  0.0651,
  0.0750,
  0.0846,
  0.0940,
  0.1035,
  0.1141,
  0.1231,
  0.1320,
  0.1414,
  0.1505,
  0.1594,
  0.1682,
  0.1771,
  0.1860,
  0.1945,
  0.2034,
  0.2115
];

const taxaAstro = [
  0,
  0.0392,
  0.0447,
  0.0501,
  0.0556,
  0.0609,
  0.0667,
  0.0720,
  0.0772,
  0.0824,
  0.0876,
  0.0928,
  0.0978,
  0.1029,
  0.1079,
  0.1128,
  0.1178,
  0.1227
];

const taxaOrion = [
  0,
  0.0407,
  0.0462,
  0.0516,
  0.0571,
  0.0624,
  0.0687,
  0.0740,
  0.0792,
  0.0844,
  0.0896,
  0.0948,
  0.0998,
  0.1049,
  0.1099,
  0.1148,
  0.1198,
  0.1247
];

const taxaSirios = [
  0,
  0.0407,
  0.0462,
  0.0516,
  0.0571,
  0.0624,
  0.0687,
  0.0740,
  0.0792,
  0.0844,
  0.0896,
  0.0948,
  0.0998,
  0.1049,
  0.1099,
  0.1148,
  0.1198,
  0.1247
];


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

  let meu_valor = 0;
  let concorrente_valor = 0;
  let economia = 0;

  if (TAXA_COMPARACAO === "astro") {
    meu_valor = faturamento * taxaAstro[parcelamento];
    concorrente_valor = faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaAstro[parcelamento]);
  }
  if (TAXA_COMPARACAO === "orion") {
    meu_valor = faturamento * taxaOrion[parcelamento];
    concorrente_valor = faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaOrion[parcelamento]);
  }
  if (TAXA_COMPARACAO === "sirios") {
    meu_valor = faturamento * taxaSirios[parcelamento];
    concorrente_valor = faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaSirios[parcelamento]);
  }

  economia = concorrente_valor - meu_valor;

  document.getElementById('resultadoAstro').innerText = formatarMoeda(meu_valor);
  document.getElementById('resultadoConcorrencia').innerText = formatarMoeda(concorrente_valor);
  document.getElementById('economia').innerText = formatarMoeda(economia);
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

function setAstro(el) {
  document.querySelector('.plans button.active').classList.remove('active');
  document.querySelector('#astro-btn').classList.add('active');
  TAXA_COMPARACAO = "astro";
  calcular();
}

function setOrion(el) {
  document.querySelector('.plans button.active').classList.remove('active');
  document.querySelector('#orion-btn').classList.add('active');
  TAXA_COMPARACAO = "orion";
  calcular();
}

function setSirios() {
  document.querySelector('.plans button.active').classList.remove('active');
  document.querySelector('#sirios-btn').classList.add('active');
  TAXA_COMPARACAO = "sirios";
  calcular();
}

function setParcelas() {
  QTD_PARCELAS = document.getElementById('parcelas').value;
  calcular();
}

function transformarDecimalEmPorcentagem(decimal) {
  return (decimal * 100).toFixed(2) + '%';
}

const faturamento = document.getElementById('faturamento');
const parcelas = document.getElementById('parcelas');
parcelas.addEventListener('change', calcular);
faturamento.addEventListener('input', formatarInputParaMoeda);
faturamento.addEventListener('focus', handleFocus);
faturamento.addEventListener('blur', handleBlur);

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

const taxaAstro = [1.39, 3.51, 4.31, 4.90, 5.49, 6.08, 6.66, 7.74, 8.31, 8.88, 9.45, 10.00, 10.55, 11.11, 11.65, 12.19, 12.72, 13.26, 13.79].map(val => val / 100);

const taxaOrion = [
  1.3, 0.032, 0.0453, 0.0505, 0.0557, 0.0608, 0.0659, 0.0765, 0.0814, 0.0865, 0.0914, 0.0963, 0.1012, 0.1061, 0.1109, 0.1156, 0.1204, 0.1251, 0.1298
];

const taxaSirios = [0.0139, 0.0296, 0.0392, 0.0447, 0.0501, 0.0556, 0.0609, 0.0667, 0.0720, 0.0772, 0.0824, 0.0876, 0.0928, 0.0978, 0.1029, 0.1079, 0.1128, 0.1178, 0.1227];

// PLANOS DE PARCELAMENTO
const ORION = {
  a: [
    1.39, 3.20, 4.53, 5.05, 5.57, 6.08, 6.59, 7.65, 8.14, 8.65, 9.14, 9.63, 10.12, 10.61, 11.09, 11.56, 12.04, 12.51, 12.98
  ],
  b: [
    1.45, 3.49, 4.68, 5.20, 5.72, 6.23, 6.74, 7.95, 8.44, 8.95, 9.44, 9.93, 10.42, 10.91, 11.39, 11.86, 12.34, 12.81, 13.28
  ],
  c: [
    1.60, 3.49, 4.68, 5.20, 5.72, 6.23, 6.74, 7.95, 8.44, 8.95, 9.44, 9.93, 10.42, 10.91, 11.39, 11.86, 12.34, 12.81, 13.28
  ]
}

const ASTRO = {
  a: [
    1.39, 3.51, 4.31, 4.90, 5.49, 6.08, 6.66, 7.74, 8.31, 8.88, 9.45, 10.00, 10.55, 11.11, 11.65, 12.19, 12.72, 13.26, 13.79
  ],
  b: [
    1.60, 3.65, 5.07, 5.66, 5.49, 6.84, 7.42, 8.29, 8.86, 9.43, 10.00, 10.55, 11.10, 11.66, 12.20, 12.74, 13.27, 13.26, 14.34
  ],
  c: [
    1.60, 3.65, 5.07, 5.66, 5.49, 6.84, 7.42, 8.29, 8.86, 9.43, 10.00, 10.55, 11.10, 11.66, 12.20, 12.74, 13.27, 13.26, 14.34
  ]
}

const SIRIOS = {
  a: [
    1.39, 2.96, 3.92, 4.47, 5.01, 5.56, 6.09, 6.67, 7.20, 7.72, 8.24, 8.76, 9.28, 9.78, 10.29, 10.79, 11.28, 11.78, 12.27
  ],
  b: [
    1.45, 3.29, 4.07, 4.62, 5.16, 5.71, 6.24, 6.87, 7.40, 7.92, 8.44, 8.96, 9.48, 9.98, 10.49, 10.99, 11.48, 11.98, 12.47
  ],
  c: [
    1.79, 3.29, 4.07, 4.62, 5.16, 5.71, 6.24, 6.87, 7.40, 7.92, 8.44, 8.96, 9.48, 9.98, 10.49, 10.99, 11.48, 11.98, 12.47
  ]
}


function showTaxes(plan) {
  const feeCard = document.querySelector('.cards-row');
  const feeValues = [];

  if (feeCard) {
    const feeListItemsA = feeCard.querySelectorAll('#card_1 ul li');
    const feeListItemsB = feeCard.querySelectorAll('#card_2 ul li');
    const feeListItemsC = feeCard.querySelectorAll('#card_3 ul li');

    // add active on clicked h3
    const feeTabs = document.querySelectorAll('.cards-row h3');
    feeTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        feeTabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
        feeCard.querySelectorAll('.card').forEach((card) => card.classList.remove('active'));
        feeCard.querySelectorAll('.card')[index].classList.add('active');
      })
    });

    // show values on list
    if (plan == 1) {
      feeListItemsA.forEach((item, index) => {
        const val = ASTRO.a[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      });
      feeListItemsB.forEach((item, index) => {
        const val = ASTRO.b[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
      feeListItemsC.forEach((item, index) => {
        const val = ASTRO.c[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
    }

    if (plan == 2) {
      feeListItemsA.forEach((item, index) => {
        const val = ORION.a[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      });
      feeListItemsB.forEach((item, index) => {
        const val = ORION.b[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
      feeListItemsC.forEach((item, index) => {
        const val = ORION.c[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
    }

    if (plan == 3) {
      feeListItemsA.forEach((item, index) => {
        const val = SIRIOS.a[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      });
      feeListItemsB.forEach((item, index) => {
        const val = SIRIOS.b[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
      feeListItemsC.forEach((item, index) => {
        const val = SIRIOS.c[index].toString().replace('.', ',');
        item.querySelector('.value').innerHTML = `${val}%`;
      }
      );
    }
  }

  console.log(feeValues);
}

showTaxes(1);


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
  document.querySelector('#taxa-concorrente-dinamica').innerText = transformarDecimalEmPorcentagem(taxasParcelamento[parcelamento]);
  if (TAXA_COMPARACAO === "astro") {
    meu_valor = faturamento - faturamento * taxaAstro[parcelamento];
    concorrente_valor = faturamento - faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaAstro[parcelamento]);
  }
  if (TAXA_COMPARACAO === "orion") {
    meu_valor = faturamento - faturamento * taxaAstro[parcelamento];
    concorrente_valor = faturamento - faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaOrion[parcelamento]);
  }
  if (TAXA_COMPARACAO === "sirios") {
    meu_valor = faturamento - faturamento * taxaAstro[parcelamento];
    concorrente_valor = faturamento - faturamento * taxasParcelamento[parcelamento];
    document.querySelector('#taxa-astro-dinamica').innerText = transformarDecimalEmPorcentagem(taxaSirios[parcelamento]);
  }

  economia = meu_valor - concorrente_valor;

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

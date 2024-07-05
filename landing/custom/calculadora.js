const calculator_div = document.querySelector('#calculator');
const div = document.createElement('div');
calculator_div.appendChild(div);

fetch('./test.html')
  .then(response => response.text())
  .then(html => {
    div.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching test.html:', error);
  });

// Obtendo o formulário
var form = document.querySelector('form');

// Adicionando um evento de envio ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.style.display = 'none';
  document.querySelector('.success').style.display = 'block';
});
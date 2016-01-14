// Hello! We're here to help and serve you. (:
$(document).ready(function () {
var telefones = [
  'Motorola X',
  'Iphone 5S',
  'Iphone 6',
  'Windows Phone',
  'Novo telefone',
  'Telefone da Xuxa'
];

var $lista = $('#lista-dinamica');
for(var i = 0; i < telefones.length; i++) {
  var nomeDoTelefone = telefones[i];
  var blocohtml = '<div class="col-sm-4 borda-vermelha"><h3>' + nomeDoTelefone + '</h3></div>';

  $lista.append(blocohtml);
}

});

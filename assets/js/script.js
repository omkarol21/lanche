function exibirCombo() {
   document.getElementById('Lan1').style.display = 'none'
   document.getElementById('Lan2').style.display = 'none'
   document.getElementById('Com').style.display = 'flex'
}

function exibirLanche() {
   document.getElementById('Lan1').style.display = 'flex'
   document.getElementById('Lan2').style.display = 'flex'
   document.getElementById('Com').style.display = 'none'
}

function exibirFotos() {
   document.getElementById('Fotos').style.display = 'none'
   document.getElementById('Galeria').style.display = 'block'
}

function fecharFotos() {
   document.getElementById('Fotos').style.display = 'block'
   document.getElementById('Galeria').style.display = 'none'
}

function enviarFormulario(event) {
   event.preventDefault()

   var nome = document.getElementById("nome").value;
   var telefone = document.getElementById("telefone").value;
   var mensagem = document.getElementById("mensagem").value;

   document.getElementById("nome").value = "";
   document.getElementById("telefone").value = "";
   document.getElementById("mensagem").value = "";

   alert("Dados enviados:\nNome: " + nome + "\nTelefone: " + telefone + "\nMensagem: " + mensagem);
}
console.log("Java script carregado")

function validarCPF (cpf){
  
  if(cpf.length != 11){
    return false;
  } else { 
    var numero = cpf.substring(0, 9);
    var digito = cpf.substring(9)

    var soma = 0
    for(var i = 10; i > 1; i--){
      soma += numero.charAt(10 - i) * i;
    }
   

    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 1)
    // Validacao do primeiro Digito
    if(resultado != digito.charAt(0)){
      return false;
    }

    soma = 0;
    numero = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--){
        soma += numero.charAt(11 - k) * k;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Validacao do segundo digito.
    if (resultado != digito.charAt(1)){
      return false;
    }

    return true;
  }
}

function validar(){
  console.log("Iniciado validacao")
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'

  var cpf = document.getElementById('cpf_digitado').value;
  var resultadoValidacao = validarCPF(cpf);

  if(resultadoValidacao){
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
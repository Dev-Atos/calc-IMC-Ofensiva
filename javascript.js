var botao = document.querySelector(".calculadora #botao");


function calcular(event) {
  event.preventDefault()

  let nome = document.querySelector('.calculadora .campos #nome').value
  let peso = document.querySelector('.calculadora .campos #peso').value
  let altura = document.querySelector('.calculadora .campos #altura').value
  let resultado = document.querySelector('.calculadora #texto')

  if(nome !== '' && altura !== '' && peso !== ''){
    
    const valorImc = (peso/(altura*altura)).toFixed(1)

    let classificacao= ''
    
    if(valorImc < 15){
        classificacao = 'só o osso'
    }else if(valorImc < 17){
        classificacao = 'parecendo um pau de virar tripa'
    }else if(valorImc < 18.5){
        classificacao = 'magrelão, precisa comer'
    }else if(valorImc < 25){
        classificacao = 'no peso ideal, vagabundo'
    }else if(valorImc < 30){
        classificacao = 'pesado'
    }else if(valorImc < 35){
        classificacao = 'gordão'
    }else if(valorImc < 40){
        classificacao = 'balofo'
    }else if(valorImc > 40){
        classificacao = 'imenso, para de comer, pelo amor de Deus'
    }
    
    resultado.textContent = 'Olá '+ nome+ ', seu IMC é: ' + valorImc + ', você está ' + classificacao

    }

  else{
      resultado.textContent = 'Preencha todos os campos, tá cego tiw?'
  }
  
}

botao.addEventListener("click", calcular);

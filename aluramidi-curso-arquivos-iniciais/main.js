function tocaSom (seletorAudio){
   const elemento = document.querySelector(seletorAudio); //play -> reproduz o som do audio na página

   if(elemento && elemento.localName === 'audio'){
     elemento.play();
   } else {
     alert('Elemento NÃO ENCONTRADO ou Seletor INVÁLIDO!!!')
   }
}
 
const listadeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição ->para
for (let contador = 0; contador < listadeTeclas.length; contador++){
    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio)

    tecla.onclick = function () { // para essa função ser chamada, só é possivel se o usuário clicar no botão
        tocaSom(idAudio); //passando a constante IdAudio como parâmetro pra função tocaSom
    }

    //onkeydown -> função de quando a tecla ou botão é clicado/abaixado
    tecla.onkeydown = function (evento){ //pode usar (event) ou (e)
        if (evento.code === 'Enter' || evento.code === 'Space'){ //verifica se a tecla/evento foi acionado pela tecla Enter ou Espaço
          tecla.classList.add('ativa'); //adiciona uma classe chamada ativa para ativar a cor vermelha no botão, clicando enter e espaço
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

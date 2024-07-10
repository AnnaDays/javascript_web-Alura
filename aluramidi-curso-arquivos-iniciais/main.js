function tocaSom (idTagAudio){
    document.querySelector(idTagAudio).play() //play -> reproduz o som do audio na página
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
}

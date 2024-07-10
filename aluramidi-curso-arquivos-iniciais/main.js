function tocaSom (idTagAudio){
    document.querySelector(idTagAudio).play() //play -> reproduz o som do audio na página
}

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listadeTeclas.length) {

    listadeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    }
    contador = contador + 1;

    console.log(contador);
}

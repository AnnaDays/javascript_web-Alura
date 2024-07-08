function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play() //play -> reproduz o som do audio na página
}


function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()
}

const listadeTeclas = document.querySelectorAll('.tecla');
listadeTeclas[0].onclick = tocaSomPom;
listadeTeclas[1].onclick = tocaSomClap;
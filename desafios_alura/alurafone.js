const listaTeclas = document.querySelectorAll('input[type=button]');
const telefone = document.querySelector('input[type=tel]');

for(i=0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];

    tecla.onclick = function (){
        telefone.value = telefone.value + tecla.value;
    }
}

 //PRATICANDO EXERCICIOS -------------------------------------

        // 1- criando um array de botões e mostrar no console
        const listaBotoes = document.querySelectorAll('input[type=button]');
        console.log(listaBotoes);
        //-----------------------------------------------------------

        // 2- incrementar um contador no Array quando clicar no elemento 4 da lista e mostrar no console
        let cont = 0;

        function incremento(){
            cont = cont + 1;
            console.log('Cliques ' + cont);
        }
        listaBotoes[3].onclick = incremento;

        //------------------------------------------------------------

        // 3- incrementar um contador no Array usando While quando clicar em qualquer botão e mostrar no console
        let i = 0;

        while(i < listaBotoes.length){
            listaBotoes[i].onclick = incremento;
            i = i + 1
        }
        
        //------------------------------------------------------------

        // 4- incrementar um contador no Array usando For quando clicar em qualquer botão e mostrar no console
        for(let j = 0; j < listaBotoes.length; j++){
            listaBotoes[j].onclick = incremento;
        }

        //------------------------------------------------------------

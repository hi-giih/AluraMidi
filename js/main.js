//Criando uma função 
// function tocaSom () {
//     document.querySelector('#som_tecla_pom').play();
// }

//Criando uma função com parametro
function tocaSom (seletorAudio){
  const elemento =  document.querySelector(seletorAudio);

  if (elemento === null){
    console.log('Elemento não encontrado');
  }

  if (elemento != null){
    elemento.play();
  }

}

//pegarmos um elemento temos as opções
// Por Selector que pega um unico elemento
//document.querySelector('.tecla_pom').onclick = tocaSomPom;
// Por SelectorAll que pega todos elementos com aquela classe
//document.querySelectorAll('.tecla');


//Criando uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');


//criando variaveis
//let contador = 0;   

//pegando apenas um elemento
//listaDeTeclas[0].onclick = tocaSom;


//Percorendo a lista com o while
// while (contador < listaDeTeclas.length){
//     listaDeTeclas[0].onclick = tocaSom;  
    
//     contador = contador + 1;

//     console.log(contador)
// }


//Percorendo a lista com o while usando e o parametro da função e usando uma função anonima

//usando o while
/* while (contador < listaDeTeclas.length) {

        const tecla = listaDeTeclas[contador];
        //usando o classlist para acessar apenas uma classe dos botões e armazenando eles dentro de uma constante
        const instrumento = tecla.classList[1];
        console.log (instrumento);

        const idAudio = `#som_${instrumento}`;
        console.log (idAudio);

     
    tecla.onclick = function (){
        tocaSom(idAudio);
     }    
    contador = contador + 1;
    console.log(contador)
}*/

//usando o for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    //usando o classlist para acessar apenas uma classe dos botões e armazenando eles dentro de uma constante
    const instrumento = tecla.classList[1];
    console.log (instrumento);

    const idAudio = `#som_${instrumento}`;
    console.log (idAudio);

    tecla.onclick = function (){
    tocaSom(idAudio);
 }    

    tecla.onkeydown == function (evento) {
        tecla.classList.add('ativa');
         
        console.log(evento)
        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa')
        }

        // if(evento.code == 'Enter'){
        //     tecla.classList.add('ativa')
        // }
    }

    tecla.onkeyup ==function (){
        tecla.classList.remove('ativa');
    }
}


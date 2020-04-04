var xhr = new XMLHttpRequest(); //recupera a info de algum servidor
xhr.open('GET', 'https://api.github.com/users/EdsonGomesJR');
xhr.send(null);

//por não acontecer no mesmo fluxo (assyncrona)
xhr.onreadystatechange = function(){
//4 -> quando a requisição volta para nós
  if(xhr.readyState == 4) {
    //pois o dado vem em JSON
    console.log(JSON.parse(xhr.responseText))
  }
}
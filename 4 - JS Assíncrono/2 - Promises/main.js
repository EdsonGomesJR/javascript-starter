var minhaPromise = function(){

  return new Promise(function(resolve, reject){
    //resolve == sucesso - reject = falha
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'https://api.github.com/users/EdsonGomesJR');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      //4 -> quando a requisição volta para nós
        if(xhr.readyState === 4) {
          if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
          } else {

            reject('Erro na requisição');
          }
        }
      }
  });
}
//exibir resultado no resolve ou reject
minhaPromise()
.then(function(response){ 
  //then -> executado quando chama o resolve na promise
  //o resolve invoca o .then no response
  console.log(response);

})
.catch(function(error){
//catch -> chamado pelo reject
console.warn(error);
});
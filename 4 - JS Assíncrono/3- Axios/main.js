var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');
var totalElement = document.querySelector('#app #total');


function listRepos(repositories){
        listElement.innerHTML = '';
        
        var total = 0;
   
    for (repo of repositories){
        var itemListElement = document.createElement('li');
        var textItemListElement = document.createTextNode(repo.name);
        itemListElement.appendChild(textItemListElement);
        listElement.appendChild(itemListElement);
        total++;

    }
  
    totalElement.innerHTML = '';
    var textTotalElement = document.createTextNode('Total de Repos : ' + total);
    totalElement.appendChild(textTotalElement);
  
       
        
}

function loadingReq(){

    totalElement.innerHTML = '';
    listElement.innerHTML = '';
    var loadingElement = document.createElement('li');
    var textElement = document.createTextNode('Carregando...');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  
}

btnElement.onclick = searchRepos;



function errorLoading(){

 listElement.innerHTML = '';
 totalElement.innerHTML = '';
 var errorElement = document.createElement('div');
 var textErrorElement = document.createTextNode('Erro usuario não encontrado!');
 errorElement.style.color = '#F00';



 errorElement.appendChild(textErrorElement);
 listElement.appendChild(errorElement);

}

function searchRepos() {

    var usuario = inputElement.value;

    loadingReq();

    axios.get('https://api.github.com/users/' + usuario + '/repos')
        .then(function (response) {
            inputElement.value = '';
            listRepos(response.data);

        })
        .catch(function (error) {
            inputElement.value = '';
  

            errorLoading();
            console.warn(error);
        });
}




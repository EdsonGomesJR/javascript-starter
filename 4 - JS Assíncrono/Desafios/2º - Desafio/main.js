var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');


function listRepos(repositories){
        listElement.innerHTML = '';
  
   
    for (repo of repositories){
        var itemListElement = document.createElement('li');
        var textItemListElement = document.createTextNode(repo.name);
        itemListElement.appendChild(textItemListElement);

        listElement.appendChild(itemListElement);
        console.log(repo.name);
 
       
    }
       
        
}



btnElement.onclick = searchRepos;

function searchRepos() {

    var usuario = inputElement.value;



    axios.get('https://api.github.com/users/' + usuario + '/repos')
        .then(function (response) {
            inputElement.value = '';
            listRepos(response.data);

        })
        .catch(function (error) {
            inputElement.value = '';
            console.warn(error);
        });
}




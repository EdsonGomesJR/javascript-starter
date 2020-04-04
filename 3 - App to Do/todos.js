var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

//list é a chave salva no metodo saveToStorage
//assim retornara os valores salvos no localStorage
// -> || [] define um valor default ao todos, caso não tenha dados, evitando assim um erro.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

  listElement.innerHTML = ''; //limpa a lista

  for (todo of todos) {

    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    //cria o elemento do link e o texto do link
    var linkElement = document.createElement('a');
    //seta o atributo do link element
    linkElement.setAttribute('href', '#');

    //saber a posição no array
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    var linkText = document.createTextNode('Excluir');

    //adiciona ao body
    linkElement.appendChild(linkText);

    //coloca o texto do todoText vindo da var todo no todoElement
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    //coloca o todo elemente (li) na lista (ul)
    listElement.appendChild(todoElement);



  }

}

renderTodos();


function addTodo() {
  //recebe o valor do input e armazena em todoText
  var todoText = inputElement.value;

  //coloca o todoText no array
  todos.push(todoText);
  inputElement.value = ''; //apaga o valor digitado no input
  renderTodos(); // chama a função para renderizar novamente os elementos
  saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
  // -> remove uma quantidade de itens do array a partir da posição passada
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();

}

function saveToStorage(){

  localStorage.setItem('list_todos',JSON.stringify(todos)); 
}
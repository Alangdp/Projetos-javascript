const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function criaBotaApagar(li){
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaApagar(li);
    salvarTarefa();
}

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregarTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

btnTarefa.addEventListener('click', function(evento) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
});


document.addEventListener('click', function(evento){
    const elemento = evento.target;

    if(elemento.classList.contains('apagar')){
       elemento.parentElement.remove();
    }

    salvarTarefa();
})

carregarTarefas();
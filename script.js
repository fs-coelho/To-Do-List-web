//Adicionar a tarefa com o botão de add

 //Pegando o botão add
let botaoAdicionar = document.getElementById("botaoAdd");
botaoAdicionar.addEventListener("click", adicionar);

 //Pegando a lista
let lista = document.querySelector(".listaDeTarefas");
//lista.classList.add("lista");


 //Função para adicionar uma tarefa
function adicionar () {
    
    //pegando o input
    let elementoInput = document.getElementById("textoInput");
    //Pegando o valor do input
    let texto = elementoInput.value;

    //Criando a tag p
    let tarefa = document.createElement("p");
    //Adicionando o texto na tag p
    tarefa.textContent = texto;
    //Adicioanndo a classe na tag p
    tarefa.classList.add("texto");

    //Verificação preenchimento do input
    if(elementoInput.value === "") {
        elementoInput.style.border = "2px solid #e63946";
        return;
    }else {
        elementoInput.style.border = "none";
    }

    //Criando os botoes
    let botaoCheck = document.createElement("button");
    let botaoRemover = document.createElement("button");
    //Adicionando a claasse na tag button
    botaoCheck.classList.add("button");
    botaoRemover.classList.add("button");

    //Criando od icones
    let iconeCheck = document.createElement("i");
    let iconeRemove = document.createElement("i");
    //Adiconando a classe a tag i
    iconeRemove.classList.add("fa-solid", "fa-trash");

    //Adicionando as tags i nos botoes
    botaoCheck.appendChild(iconeCheck);
    botaoRemover.appendChild(iconeRemove);

    //Adicionando evento ao botao
    botaoCheck.addEventListener("click", function() {
        if (botaoCheck.classList.contains("concluido")) {
            botaoCheck.classList.remove("concluido");
            iconeCheck.classList.remove("fa-solid", "fa-check");
        } else {
            botaoCheck.classList.add("concluido");
            iconeCheck.classList.add("fa-solid", "fa-check");
        }
    
    });
    botaoRemover.addEventListener("click", function () {
        botaoRemover.classList.add("excluir");
        setTimeout( function () {
            botaoRemover.parentElement.remove();
        }, 1000);// tempo para excluir----------------------------------------------------------------------------------------------------------------------------------
    })

    //Criando a linha
    let linha = document.createElement("li");
    //Adicionando a classe a linha
    linha.classList.add("linha");
    //Adicionando os botoes e o texto na linha
    linha.appendChild(botaoCheck);
    linha.appendChild(tarefa);
    linha.appendChild(botaoRemover);

    //Adicionando a tag li
    lista.appendChild(linha);

    //Limpar o input
    elementoInput.value = "";
}

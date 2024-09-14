const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa
() {
    minhaListaDeItens.push(input.value)
    tarefa: input.value
    input.value = ''



    mostrarTarefas()
}




function mostrarTarefas() {
  let novaLi = ''

    minhaListaDeItens.forEach((tarefa, posicao) => {
        novaLi = novaLi + `

        <li class="task">
           <img src="image/checked.png" alt="check na tarefa">
           <p>${tarefa}</p>
           <img src="image/trash.png" alt="Mover imagem para a lixeira" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    function deletarItem(posicao) {
        minhaListaDeItens.splice(posicao, 1)
       

    }

    mostrarTarefas

    listaCompleta.innerHTML = novaLi



}

button.addEventListener('click', adicionarNovaTarefa
    
);

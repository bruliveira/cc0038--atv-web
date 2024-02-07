document.addEventListener('DOMContentLoaded', function() {
  const tituloToDoList = document.createElement("h1");
  tituloToDoList.innerText = "To Do List";
  document.querySelector('.titulo-cima').appendChild(tituloToDoList);

  const inputTarefa = document.querySelector('.input-tarefa');
  const buttonAdicionar = document.querySelector('.button-adicionar');
  const divTarefasAdicionadas = document.querySelector('.tarefas-adicionadas');

  buttonAdicionar.addEventListener('click', function() {
      const tarefa = inputTarefa.value.trim();
      if (tarefa !== '') {
          adicionarTarefa(tarefa);
          inputTarefa.value = ''; 
      }
  });

  function adicionarTarefa(tarefa) {
      const divTarefa = document.createElement('div');
      divTarefa.classList.add('tarefa');

      const divTexto = document.createElement('div');
      divTexto.textContent = tarefa;
      divTarefa.appendChild(divTexto);

      const divBotoes = document.createElement('div');

      const buttonEditar = document.createElement('button');
      buttonEditar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
      buttonEditar.classList.add('button-editar');
      buttonEditar.title = 'Editar';
      buttonEditar.addEventListener('click', function() {
          // Obtenha o texto da tarefa
          const textoTarefa = divTexto.textContent;
          // ampo de entrada para a edição
          const inputEdicao = document.createElement('input');
          inputEdicao.type = 'text';
          inputEdicao.value = textoTarefa;
          divTexto.textContent = '';
          divTexto.appendChild(inputEdicao);
          // Evento para salvar a edição
          inputEdicao.addEventListener('change', function() {
              const novoTexto = inputEdicao.value.trim();
              if (novoTexto !== '') {
                  divTexto.textContent = novoTexto;
              } else {
                  divTexto.textContent = textoTarefa;
              }
          });
      });
      divBotoes.appendChild(buttonEditar);

      const buttonExcluir = document.createElement('button');
      buttonExcluir.innerHTML = '<i class="fas fa-trash-alt"></i>';
      buttonExcluir.classList.add('button-excluir');
      buttonExcluir.title = 'Excluir';
      buttonExcluir.addEventListener('click', function() {
          divTarefa.remove();
          console.log('Excluir tarefa:', tarefa);
      });
      divBotoes.appendChild(buttonExcluir);

      divTarefa.appendChild(divBotoes);

      divTarefasAdicionadas.appendChild(divTarefa);
  }
});

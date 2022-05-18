/*  
  > PRIMEIRO PASSO - ao passar o cursor do mouse em cima do personagem selecionado, deve-se:
  - atribuir, ao personagem que passamos o cursor do mouse em cima, a classe 
  'personagem selecionado' para que ele possua a animação nas bordas dele.

  - retirar a classe 'personagem selecionado' do personagem que estava selecionado
  antes de passar o cursor do mouse no novo personagem selecionado.

  > SEGUNDO PASSO - realizar a troca de imagem e de nome do *personagem grande* ao passarmos o cursor do mouse
  em cima de um novo personagem da listagem.
    - alterar a imagem do personagem selecionado do jogador 1.
    - logo após e juntamente, alterar o nome do personagem selecionado do jogador 1.
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    // anulando o mouseenter para o personagem selecionado do jogador 2.
    const idSelecionado = personagem.attributes.id.value;
    if (idSelecionado === 'dio-brando') return;

    // removendo, na listagem de personagens, a classe "selecionado" para que ela saia ao selecionarmos outro personagem.
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    // atribuindo, na listagem de personagens, a classe "selecionado" a quem passarmos o cursor do mouse em cima.
    personagem.classList.add('selecionado');

    // alterando a imagem do personagem do jogador 1 para que ela seja referente ao personagem selecionado na listagem de personagens.
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    // e por fim, alterando o nome do personagem para que ele seja referente à imagem e à escolha de personagem do jogador 1.
    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});

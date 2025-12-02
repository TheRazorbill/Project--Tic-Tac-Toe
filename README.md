# ❌ Tic Tac Toe (Jogo da Velha) ⭕

Um projeto clássico de Jogo da Velha (Tic Tac Toe) desenvolvido com **HTML**, **CSS** e **JavaScript**. O foco principal deste projeto foi a prática de manipulação do DOM e a implementação de lógica de jogo utilizando padrões de design de código limpo.

##  Preview

<img width="785" height="948" alt="Screenshot 2025-12-02 072151" src="https://github.com/user-attachments/assets/811d836c-5613-423e-9705-6f60bec873b7" />

---

##  Demonstração Ao Vivo

Você pode visualizar o projeto em funcionamento no link abaixo:

 **[GitHub Pages](--)**

---
##  Funcionalidades

- **Jogabilidade Local:** Dois jogadores podem jogar no mesmo navegador alternando turnos.
- **Indicação de Turno:** O jogo exibe de quem é a vez (Player 1 "X" ou Player 2 "O").
- **Verificação de Vitória:** Algoritmo que detecta vitórias em linhas, colunas e diagonais.
- **Detecção de Empate:** Informa quando o jogo termina sem vencedores.
- **Botão de Reinício:** Permite limpar o tabuleiro e começar uma nova partida sem recarregar a página.
- **Design Responsivo:** O tabuleiro se ajusta ao tamanho da tela (uso de unidades `vmin`).

##  Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização utilizando **Flexbox** para layout e centralização.
- **JavaScript (ES6+):** Lógica do jogo.

##  Destaques do Código (Conceitos Aprendidos)

Este projeto foi construído utilizando conceitos avançados de organização de código em JavaScript para evitar poluição do escopo global:

1.  **Factory Functions:** Utilizadas para criar os objetos dos jogadores (`player`).
2.  **Module Pattern (IIFE):** Utilizado para encapsular a lógica do tabuleiro e do controle de jogo.
    - `Gameboard`: Gerencia o estado do array do tabuleiro.
    - `gameController`: Gerencia o fluxo do jogo (turnos, validação de vitória).
    - `displayController`: Gerencia a interação com o DOM (cliques e atualizações na tela).

```javascript
// Exemplo da estrutura utilizada no projeto
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  // ... métodos privados e públicos
  return { getBoard, setField, reset };
})();
````

##  Como executar o projeto

1.  Clone este repositório ou baixe os arquivos.
2.  Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estão na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).

-----

Desenvolvido para fins de estudo e prática de JavaScript.

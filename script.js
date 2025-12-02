const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setField = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  return { getBoard, setField };
})();

const player = (name, marker) => {
  return {
    name,
    marker,
  };
};

const gameController = (() => {
  let round = 0;
  const player1 = player("Player 1", "X");
  const player2 = player("Player 2", "O");
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
function checkWinner() {
  const board = Gameboard.getBoard(); 
  
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    
    const cellA = board[condition[0]];
    const cellB = board[condition[1]];
    const cellC = board[condition[2]];

    if (cellA === "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      return cellA;
    }
  }

  if (!board.includes("")) {
    return "Empate";
  }
  
  return null;
}
  const getCurrentPlayer = () => {
    return round % 2 === 0 ? player1 : player2;
  };
  const playRound = (index) => {
    const currentPlayer = getCurrentPlayer();
    const moveSuccessful = Gameboard.setField(index, currentPlayer.marker);
    if (moveSuccessful) {
      round++;
      const result = checkWinner();
      if(result !== null){
        console.log(result)
      }
      return true;
    }
    return false;
  };
  return { playRound, getCurrentPlayer };
})();

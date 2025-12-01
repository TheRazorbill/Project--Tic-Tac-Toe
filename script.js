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
  const getCurrentPlayer = () => {
    return round % 2 === 0 ? player1 : player2;
  };
  const playRound = (index) => {
    const currentPlayer = getCurrentPlayer();
    const moveSuccessful = Gameboard.setField(index, currentPlayer.marker);
    if (moveSuccessful) {
      round++;
      return true;
    }
    return false;
  };
  return { playRound, getCurrentPlayer };
})();

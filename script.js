const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  const getBoard = () => board;

  const setField = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  return { getBoard, setField, reset };
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
  const reset = () => {
    round = 0;
    Gameboard.reset();
  };

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
      if (result !== null) {
        console.log(result);
      }
      return true;
    }
    return false;
  };
  return { playRound, getCurrentPlayer, checkWinner, reset };
})();

const displayController = (() => {
  const cells = document.querySelectorAll(".box");
  const statusDiv = document.getElementById("status");
  const resetBtn = document.getElementById("reset");
  const updateBoard = () => {
    const board = Gameboard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };
  const handleCellClick = (event) => {
    const index = parseInt(event.target.dataset.index);
    const moveMade = gameController.playRound(index);
    if (moveMade) {
      updateBoard();
      const winner = gameController.checkWinner();
      if (winner) {
        if (winner === "Empate") {
          statusDiv.textContent = "It's a draw!";
        } else {
          statusDiv.textContent = `${winner} wins!`;
        }
        cells.forEach((cell) =>
          cell.removeEventListener("click", handleCellClick)
        );
      } else {
        const currentPlayer = gameController.getCurrentPlayer();
        statusDiv.textContent = `${currentPlayer.name}'s turn (${currentPlayer.marker})`;
      }
    }
  };
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  const resetDisplay = () => {
    gameController.reset();

    updateBoard();

    const currentPlayer = gameController.getCurrentPlayer();
    statusDiv.textContent = `${currentPlayer.name}'s turn (${currentPlayer.marker})`;

    cells.forEach((cell) => {
      cell.removeEventListener("click", handleCellClick);
      cell.addEventListener("click", handleCellClick);
    });
  };

  resetBtn.addEventListener("click", resetDisplay);

  const init = () => {
    const currentPlayer = gameController.getCurrentPlayer();
    statusDiv.textContent = `${currentPlayer.name}'s turn (${currentPlayer.marker})`;
  };
  return { init };
})();

displayController.init();

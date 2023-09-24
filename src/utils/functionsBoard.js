export const generateBoard = (size) => {
  const newBoard = [];
  for (let i = 0; i < size; i++) {
    newBoard.push([...new Array(size)]);
  }
  return newBoard;
};
const checkHorizontal = (board) => {
  for (let row of board) {
    const rowSet = new Set(row);
    if (rowSet.size === 1 && !rowSet.has(undefined)) {
      return true;
    }
  }
};
export const rowsToColumns = (board) => {
  const newBoard = [];
  let count = 0;
  while (count < board.length) {
    const newRow = [];
    for (let row = 0; row < board.length; row++) {
      newRow.push(board[row][count]);
    }
    newBoard.push(newRow);
    count++;
  }
  return newBoard;
};
export const checkDiagonal = (board) => {
  const newBoard = [[], []];
  let increment = 0;
  let decrement = board.length - 1;
  while (increment < board.length) {
    newBoard[0].push(board[increment][increment]);
    newBoard[1].push(board[increment][decrement]);
    increment++;
    decrement--;
  }
  return newBoard;
};
export const checkForWin = (board) => {
  // horizontal
  if (checkHorizontal(board)) return true;
  // vertical
  if (checkHorizontal(rowsToColumns(board))) return true;
  // diagonal
  if (checkHorizontal(checkDiagonal(board))) return true;
};

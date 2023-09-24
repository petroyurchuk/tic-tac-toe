import React from "react";
import { generateBoard, checkForWin } from "../utils/functionsBoard";
const Tictactoe = () => {
  const [inputSize, setInputSize] = React.useState("");
  const [board, setBoard] = React.useState(generateBoard(3));
  const isMounted = React.useRef(false);
  const [currPlayer, setCurrPlayer] = React.useState("x");
  const [winner, setWinner] = React.useState("");
  React.useEffect(() => {
    if (isMounted.current) {
      setBoard(generateBoard(Number(inputSize) || 3));
    }
    isMounted.current = true;
  }, [inputSize]);
  const handleClick = (row, col) => {
    board[row][col] = currPlayer;
    setBoard([...board]);
    if (checkForWin(board)) {
      setWinner(`Winner is : ${currPlayer}`);
      setCurrPlayer("x");
    } else {
      setCurrPlayer((prevState) => (prevState === "x" ? "y" : "x"));
    }
  };
  const handleReset = () => {
    setBoard(generateBoard(Number(inputSize) || 3));
    setWinner("");
    setCurrPlayer("x");
  };
  return (
    <div>
      <div className="max-w-sm mx-auto p-2 bg-white rounded-lg mb-[10px]">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="field"
        >
          Size of field
        </label>
        <input
          value={inputSize}
          onChange={(e) => {
            setInputSize(e.target.value);
          }}
          type="text"
          id="field"
          placeholder="Enter size of field"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <div>
          {board.map((row, r) => {
            return (
              <div key={r} className="flex">
                {row.map((cell, c) => {
                  return (
                    <div
                      key={c}
                      onClick={() => handleClick(r, c)}
                      style={{
                        border: `solid #fff 1px`,
                        height: "50px",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="w-[300px] h-[40px] bg-green-600 rounded-lg text-white font-bold text-xl mt-[10px]"
        onClick={handleReset}
      >
        Reset
      </button>
      <h1 className="text-center text-2xl italic">{winner}</h1>
    </div>
  );
};
export default Tictactoe;

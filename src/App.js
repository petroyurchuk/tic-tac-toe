import React from "react";
import { Tictactoe } from "./components";

function App() {
  return (
    <div
      className={`w-screen h-screen flex flex-wrap justify-center items-center bg-black text-white`}
    >
      <Tictactoe />
    </div>
  );
}

export default App;

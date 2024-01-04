import {useState} from "react"
import Board from "./Board.jsx"
import Status from "./Status.jsx"
import Moves from "./Moves.jsx"

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [itemClick, setItemClick] = useState(null)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  const handlePlay = (nextSquares) => {

    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];
    
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)

  }

  return (
    <>
      <div className="game-board">
        <Status squares={currentSquares} xIsNext={xIsNext}/>
        <Board
          setItemClick={setItemClick}
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <Moves
        itemClick={itemClick}
        currentMove={currentMove}
        history={history}
        setCurrentMove={setCurrentMove}
      />
    </>
  )
}

export default Game
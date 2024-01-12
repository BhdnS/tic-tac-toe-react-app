import { useState } from 'react'
import calculateRowCol from '../utils/calculateRowCol.js'

const Moves = ({ currentMove, history, setCurrentMove, itemClick }) => {
  const [isAscending, setIsAscending] = useState(false)
  const { row, col } = calculateRowCol(itemClick)

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    const isCurrentMove = move === currentMove

    let description

    if (move > 0) {
      description = isCurrentMove
        ? `You're on the go #${move} (row:${row} col:${col})`
        : `Go to move #${move} (row:${row} col:${col})`
    } else {
      description = 'Go to game start'
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  const handleReverse = () => {
    setIsAscending(!isAscending)
  }

  const sortMovies = isAscending ? [...moves].reverse() : moves

  return (
    <div className='game-info'>
      <button onClick={handleReverse}>
        Sort: {isAscending ? 'Ascending' : 'Descending'}
      </button>
      <ol>{sortMovies}</ol>
    </div>
  )
}

export default Moves

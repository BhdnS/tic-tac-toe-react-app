import calculateWinner from '../utils/calculateWinner.js'
import Square from './Square.jsx'

const Board = ({ xIsNext, squares, onPlay, setItemClick }) => {
  const winner = calculateWinner(squares)

  const renderSquare = (i, isWinnerSquare) => {
    return (
      <Square
        value={squares[i]}
        key={i}
        onSquareClick={() => handleClick(i)}
        isWinnerSquare={isWinnerSquare}
      />
    )
  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return
    const nextSquares = squares.slice()

    setItemClick(i + 1)

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    onPlay(nextSquares)
  }

  const renderBoardRows = () => {
    const rows = []
    for (let row = 0; row < 3; row++) {
      const squaresInRow = []
      for (let col = 0; col < 3; col++) {
        const squaresIndex = row * 3 + col
        const isWinnerSquare = winner && winner.line.includes(squaresIndex)
        squaresInRow.push(renderSquare(squaresIndex, isWinnerSquare))
      }
      rows.push(
        <div className='board-row' key={row}>
          {squaresInRow}
        </div>
      )
    }
    return rows
  }

  return <>{renderBoardRows()}</>
}

export default Board

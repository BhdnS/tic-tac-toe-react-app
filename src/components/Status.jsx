import calculateWinner from "../utils/calculateWinner.js"

const Status = ({ squares, xIsNext }) => {
  const winner = calculateWinner(squares)
  const isBoardFull = squares.every((v) => v !== null)

  let status
  if (winner) {
    status = "Winner: " + winner.winner
  } else if (isBoardFull) {
    status = 'Draw'
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <div>{status}</div>
  )
}

export default Status
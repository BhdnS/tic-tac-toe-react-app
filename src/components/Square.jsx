const Square = ({ value, onSquareClick, isWinnerSquare }) => {
  return (
    <button
      className={isWinnerSquare ? 'square win_square' : 'square'}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

export default Square
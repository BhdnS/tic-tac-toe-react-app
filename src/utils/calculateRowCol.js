const calculateRowCol = (item) => {
  const row = Math.floor((item - 1) / 3) + 1
  const col = (item - 1) % 3 + 1
  return { row, col }
}

export default calculateRowCol
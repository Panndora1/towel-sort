
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (!matrix) {
    return []
  }

  let arrs = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      arrs = arrs.concat(matrix[i].reverse())
    } else {
      arrs = arrs.concat(matrix[i])
    }
    
  }
  return arrs
}

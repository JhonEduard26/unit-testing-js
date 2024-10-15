function sum(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) return null

  return a / b
}

function average(a, b) {
  return sum(a, b) / 2
}

module.exports = {
  average,
  divide,
  multiply,
  sum,
}
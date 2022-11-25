const numberInputDisplay = document.querySelector('.number-input')
const operationInputDisplay = document.querySelector('.operation-input')
const resultDisplay = document.querySelector('.result-display')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation-btn')
const equalsBtn = document.querySelector('.equals')
const resetBtn = document.querySelector('.reset')
let isLastInsertOperation = false
let answer = ''
let actualOperation = ''
let nextNumber = ''

window.onload = () => {
  numbers.forEach((number) => {
    number.addEventListener('click', checkNumber)
  })
  operations.forEach((operation) => {
    operation.addEventListener('click', checkOperation)
  })
  equalsBtn.addEventListener('click', equals)
  resetBtn.addEventListener('click', reset)
}

const reset = () => {
  isLastInsertOperation = false
  answer = ''
  actualOperation = ''
  nextNumber = ''
  numberInputDisplay.innerHTML = ''
  resultDisplay.innerHTML = ''
  operationInputDisplay.innerHTML = ''
}

const equals = () => {
  if (
    (isLastInsertOperation && actualOperation != '√') ||
    actualOperation == ''
  ) {
    return
  }

  getResult()
  actualOperation = ''
  appendOperationToDisplay(actualOperation)
  isLastInsertOperation = true
}

function getResult() {
  nextNumber = getNumberInInputDisplay()
  answer = calculate(nextNumber)
  numberInputDisplay.innerHTML = ''
  appendResultToDisplay(answer)
}

const checkNumber = (event) => {
  let number = event.target.value
  isLastInsertOperation = false
  appendNumberToDisplay(number)
  if (actualOperation == '') {
    updateResultDisplay()
  }
}

const checkOperation = (event) => {
  let operation = event.target.value
  appendOperationToDisplay(operation)
  if (isLastInsertOperation) {
    updateActualOperation(operation)
    return
  }
  if (actualOperation != '') {
    getResult()
    updateActualOperation(operation)
    return
  }
  updateResultDisplay()
  updateActualOperation(operation)
  numberInputDisplay.innerText = ''
}

const updateActualOperation = (operation) => {
  actualOperation = operation
  isLastInsertOperation = true
}

const updateResultDisplay = () => {
  resultDisplay.innerHTML = getNumberInInputDisplay()
  answer = getNumberInInputDisplay()
}

const getNumberInInputDisplay = () => {
  return numberInputDisplay.innerText
}

const appendNumberToDisplay = (number) => {
  numberInputDisplay.innerHTML += number
}

const appendOperationToDisplay = (operation) => {
  operationInputDisplay.innerHTML = operation
}

const appendResultToDisplay = (result) => {
  resultDisplay.innerHTML = result
}

const calculate = (nextNumber) => {
  switch (actualOperation) {
    case '+':
      return sum(nextNumber)
    case '-':
      return difference(nextNumber)
    case '/':
      return division(nextNumber)
    case '*':
      return multiplication(nextNumber)
    case '^':
      return power(nextNumber)
    case '√':
      return squareRoot(nextNumber)
    case '%':
      return percent(nextNumber)
  }
}

// OPERATIONS

const sum = (nextNumber) => {
  return +answer + +nextNumber
}

const difference = (nextNumber) => {
  return +answer - +nextNumber
}

const multiplication = (nextNumber) => {
  return +answer * +nextNumber
}

const division = (nextNumber) => {
  return +answer / +nextNumber
}

const power = (nextNumber) => {
  return Math.pow(+answer, +nextNumber)
}

const squareRoot = () => {
  return Math.sqrt(+answer)
}

const percent = (nextNumber) => {
  return (100 * answer) / nextNumber
}

const inputDisplay = document.querySelector('.input-display')
const numberInputDisplay = document.querySelector('.number-input')
const operationInputDisplay = document.querySelector('.operation-input')
const resultDisplay = document.querySelector('.result-display')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation-btn')
const equalsBtn = document.querySelector('.equals')
let isLastInsertOperation = true
let firstOperand = ''
let actualOperation = ''

window.onload = () => {
  numbers.forEach((number) => {
    number.addEventListener('click', checkNumber)
  })

  operations.forEach((operation) => {
    operation.addEventListener('click', checkOperation)
  })

  equalsBtn.addEventListener('click', equals)
}

const equals = () => {
  nextNumber = numberInputDisplay.innerText
  firstOperand = calculate(nextNumber)
  appendResultToDisplay(firstOperand)
}

const checkNumber = (event) => {
  console.log('checko il number')
  let number = event.target.value
  if (isLastInsertOperation) {
    isLastInsertOperation = false
  }
  isLastInsertOperation = false

  appendNumberToDisplay(number)
}

const checkOperation = (event) => {
  actualOperation = event.target.value
  appendOperationToDisplay()
  if (isLastInsertOperation) {
    console.log(actualOperation)
    isLastInsertOperation = true
    return
  }
  isLastInsertOperation = true
  nextNumber = numberInputDisplay.innerText
  firstOperand = calculate(nextNumber)
  appendResultToDisplay(firstOperand)
  numberInputDisplay.innerText = ''
  console.log('sono firstOperand ' + firstOperand)
  console.log(inputDisplay.innerText)
}

const appendNumberToDisplay = (number) => {
  numberInputDisplay.innerHTML += number
}

const appendOperationToDisplay = () => {
  operationInputDisplay.innerHTML = actualOperation
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

    case '&radic;':
      return squareRoot(nextNumber)

    case '%':
      return percent(nextNumber)

    // case '=':
    //   return
  }
}

// OPERATIONS

const sum = (nextNumber) => {
  console.log(firstOperand, nextNumber)

  return +firstOperand + +nextNumber
}

const difference = (nextNumber) => {
  console.log(firstOperand, nextNumber)

  return +firstOperand - +nextNumber
}

const multiplication = (nextNumber) => {
  console.log(firstOperand, nextNumber)

  return +firstOperand * +nextNumber
}

const division = (nextNumber) => {
  console.log(firstOperand, nextNumber)
  return +firstOperand / +nextNumber
}

const power = (nextNumber) => {
  return Math.pow(+firstOperand, +nextNumber)
}

const squareRoot = (nextNumber) => {
  return Math.sqrt(+firstOperand)
}

const percent = (nextNumber) => {
  return 'percent fatta'
}

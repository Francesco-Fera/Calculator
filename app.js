const inputDisplay = document.querySelector('.input-display')
const numberInputDisplay = document.querySelector('.number-input')
const operationInputDisplay = document.querySelector('.operation-input')
const resultDisplay = document.querySelector('.result-display')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation-btn')
let isLastInsertOperation = true
let firstOperand
let secondOperand
let actualOperation

window.onload = () => {
  numbers.forEach((number) => {
    number.addEventListener('click', checkNumber)
  })

  operations.forEach((operation) => {
    operation.addEventListener('click', checkOperation)
  })
}

const checkNumber = (event) => {
  let number = event.target.value
  appendNumberToDisplay(number)
  isLastInsertOperation = false
}

const checkOperation = (event) => {
  actualOperation = event.target.value

  // if (isLastInsertOperation) {
  //   a =
  // }
  appendOperationToDisplay(operation)
  calculate()
  isLastInsertOperation = true
}

const appendNumberToDisplay = (number) => {
  numberInputDisplay.innerHTML += number
}

const appendOperationToDisplay = (operation) => {
  operationInputDisplay.innerHTML = operation
}

const calculate = () => {
  switch (actualOperation) {
    case value:
      break

    default:
      break
  }
}

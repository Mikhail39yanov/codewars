const numbers = [2223, 102, 2223, 102, 4589, 6803, 102]
// [2223, 102, 4589, 6803]

function getUniqueNumbers(inputArray) {
  const uniqueArr = []
  let k = 0

  for (let i = 0; i < inputArray.length; i++) {
    const number = inputArray[i]

    const isCheck = checkHash(number, uniqueArr)

    if (isCheck) {
      uniqueArr[k] = number
      k++
    }
  }

  console.log(uniqueArr)
  return uniqueArr
}

function hashInt(input) {
  let int = 1
  let remainderDivision

  while (input !== 0) {
    remainderDivision = input % 10

    if (remainderDivision !== 0) {
      int *= remainderDivision
    }

    input = Math.trunc(input / 10)
  }

  return int
}

function checkHash(input, arr) {
  const hash = hashInt(input)

  if (arr.length === 0) {
    return true
  }

  for (let i = 0; i < arr.length; i++) {
    const hashUnique = hashInt(arr[i])

    if (hash === hashUnique) {
      return false
    }
  }

  return true
}

getUniqueNumbers(numbers)

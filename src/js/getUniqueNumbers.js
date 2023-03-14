const numbers = [2223, 102, 2223, 102, 4589, 6803, 102]
// [2223, 102, 4589, 6803]

function getUniqueNumbers(inputArray) {
  const uniqueArr = []
  let k = 0

  for (let i = 0; i < inputArray.length; i++) {
    const number = inputArray[i]

    if (!uniqueArr.includes(number)) {
      uniqueArr[k] = number
      k++
    }
  }

  console.log(uniqueArr)
  return uniqueArr
}

getUniqueNumbers(numbers)

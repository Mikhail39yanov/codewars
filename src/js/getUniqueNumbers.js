const numbers = [2223, 102, 2223, 102, 4589, 6803, 102]
// [2223, 102, 4589, 6803]

function getUniqueNumbers(inputArray) {
  const hashTable = {}
  const uniqueArr = []
  let k = 0

  for (let i = 0; i < inputArray.length; i++) {
    const number = inputArray[i]

    if (hashTable[number]) {
      continue
    }

    uniqueArr[k] = number
    k++
    hashTable[number] = true
  }

  // console.log(uniqueArr)
  // console.log(hashTable)
  return uniqueArr
}

getUniqueNumbers(numbers)

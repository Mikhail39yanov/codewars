function hashInt(input) {
  let i = 0
  let int = 1
  const digits = []
  while (input != 0) {
    let remainderDivision = input % 10

    input = Math.trunc(input / 10)
    digits[i] = remainderDivision

    if (remainderDivision !== 0) {
      int *= remainderDivision
    }

    i++
  }

  console.log(digits)
  console.log(int)
  return int
}

hashInt(204)
// hashInt(234)

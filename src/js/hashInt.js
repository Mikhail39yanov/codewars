function hashInt(input) {
  let int = 1
  let remainderDivision

  while (input !== 0) {
    remainderDivision = input % 10

    // console.log('input==>', input)
    // console.log('remainderDivision==>', remainderDivision)
    // console.log('division==>', input / 10)

    if (remainderDivision !== 0) {
      int *= remainderDivision
    }

    input = Math.trunc(input / 10)
  }

  console.log(int)
  return int
}

hashInt(204)
// hashInt(234)

function letterAccum(symbol, index) {
  let i = 0
  let ac = ''

  while (i < index) {
    ac += symbol
    i++
  }

  return ac[0].toUpperCase() + ac.substring(1)
}

function accum(s) {
  const stringLower = s.toLowerCase()
  let stringAccum = ''

  for (let i = 1; i < stringLower.length + 1; i++) {
    const letter = stringLower[i - 1]
    const accum = letterAccum(letter, i)

    if (stringLower.length + 1 === i + 1) {
      stringAccum += accum
      continue
    }

    stringAccum += accum + '-'
  }

  console.log(stringAccum)
  return stringAccum
}

accum('abcd') // -> "A-Bb-Ccc-Dddd"
// accum('RqaEzty') // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum('cwAt') // -> "C-Ww-Aaa-Tttt"
// accum('ZpglnRxqenU') // -> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

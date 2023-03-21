function accum(s) {
  const stringLower = s.toLowerCase()
  let stringAccum = ''

  for (let i = 0; i < stringLower.length; i++) {
    const letter = stringLower[i]

    const accumRepeat = letterRepeat(letter, i + 1)

    if (i === stringLower.length - 1) {
      stringAccum += accumRepeat
      break
    }

    stringAccum += accumRepeat + '-'
  }

  // console.log(stringAccum)
  return stringAccum
}

function letterRepeat(symbol, counter) {
  let ac = ''

  while (counter > 0) {
    ac += symbol
    counter--
  }

  return ac[0].toUpperCase() + ac.substring(1)
}

// accum('abcd') // -> "A-Bb-Ccc-Dddd"
// accum('RqaEzty') // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum('cwAt') // -> "C-Ww-Aaa-Tttt"
// accum('ZpglnRxqenU') // -> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

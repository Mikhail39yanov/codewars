function getMiddle(s) {
  let length = s.length
  let left = 0
  let right = s.length - 1
  let middle = Math.floor((left + right) / 2)

  if (length % 2 == 0) {
    console.log('Четное', length)
    // console.log(s[middle] + s[middle + 1])
    return s[middle] + s[middle + 1]
  } else {
    console.log('Нечетное', length)
    // console.log(s[middle])
    return s[middle]
  }
}

// getMiddle('test') // 'es'
// getMiddle('testing') // 't'
// getMiddle('middle') // 'dd'
// getMiddle('A') //'A'

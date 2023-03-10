function hashString(input) {
  let int = 0
  for (let i = 0; i < input.length; i++) {
    const codeSymbol = input.charCodeAt(i)
    int += codeSymbol
  }
  console.log(int)
  return int
}

hashString('qwerty ')

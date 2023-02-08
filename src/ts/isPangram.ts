export const isPangram = (phrase: string): boolean => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let regex = /[^\w]/gi
  let lowercase = phrase.toLowerCase().replace(regex, '')
  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false
    }
  }
  return true
  // или
  // return new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26
}

isPangram('The quick brown fox jumps over the lazy dog.') // true
isPangram('This is not a pangram.') // false

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))

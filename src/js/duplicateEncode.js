function duplicateEncode(word) {
  let wordLower = word.toLowerCase()
  const hashTable = {}
  let uniqueStr = ''

  for (let i = 0; i < wordLower.length; i++) {
    const letter = wordLower[i]

    if (hashTable[letter]) {
      hashTable[letter] = ')'
      continue
    }

    hashTable[letter] = true
  }

  for (let i = 0; i < wordLower.length; i++) {
    const letter = wordLower[i]

    if (hashTable[letter] === ')') {
      uniqueStr = uniqueStr + ')'
    } else {
      uniqueStr = uniqueStr + '('
    }
  }

  console.log(hashTable)
  console.log(uniqueStr)
  return uniqueStr
}

// duplicateEncode('din') // '((('
// duplicateEncode('recede') // '()()()'
// duplicateEncode('Success') // ')())())', 'should ignore case'
// duplicateEncode('(( @') // '))(('

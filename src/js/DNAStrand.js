const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

function DNAStrand(dna) {
  let complementaryStrand = ''
  for (let i = 0; i < dna.length; i++) {
    complementaryStrand += pairs[dna[i]]
  }

  console.log(complementaryStrand)
  return complementaryStrand
}

// DNAStrand('AAAA') // 'TTTT', 'String AAAA is'
// DNAStrand('ATTGC') // 'TAACG', 'String ATTGC is'
// DNAStrand('GTAT') // 'CATA', 'String GTAT is'

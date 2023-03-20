function DNAStrand(dna) {
  let complementaryStrand = ''
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        complementaryStrand += 'T'
        break
      case 'T':
        complementaryStrand += 'A'
        break
      case 'C':
        complementaryStrand += 'G'
        break
      case 'G':
        complementaryStrand += 'C'
        break
      default:
        return null
    }
  }

  console.log(complementaryStrand)
  return complementaryStrand
}

// DNAStrand('AAAA') // 'TTTT', 'String AAAA is'
// DNAStrand('ATTGC') // 'TAACG', 'String ATTGC is'
// DNAStrand('GTAT') // 'CATA', 'String GTAT is'

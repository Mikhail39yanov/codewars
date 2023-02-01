export const disemvowel = (str) => str.replace(/[aeiou]/gi, '')

disemvowel('This website is for losers LOL!')
console.log(disemvowel('This website is for losers LOL!')) // "Ths wbst s fr lsrs LL!"

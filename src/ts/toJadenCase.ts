String.prototype.toJadenCase = function (): string {
  return this.split(' ')
    .map((word) => `${word[0].toUpperCase() + word.slice(1)}`)
    .join(' ')
}

declare global {
  interface String {
    toJadenCase(): string
  }
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())
// "How can mirrors be real if our eyes aren't real"
// "How Can Mirrors Be Real If Our Eyes Aren't Real"

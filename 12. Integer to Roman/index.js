import config from './config.js'

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  const thousands = Math.floor(num / 1000)
  const hundreds = Math.floor((num % 1000) / 100)
  const tens = Math.floor((num % 100) / 10)
  const digit = num % 10

  return (
    toRoman('M', 'M', 'M', thousands) +
    toRoman('C', 'D', 'M', hundreds) +
    toRoman('X', 'L', 'C', tens) +
    toRoman('I', 'V', 'X', digit)
  )
}

const toRoman = (small, middle, high, digit) => {
  switch (digit) {
    case 1:
      return small
    case 2:
      return small + small
    case 3:
      return small + small + small
    case 4:
      return small + middle
    case 5:
      return middle
    case 6:
      return middle + small
    case 7:
      return middle + small + small
    case 8:
      return middle + small + small + small
    case 9:
      return small + high
    default:
      return ''
  }
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log('Input:', ...c.input, 'Output:', intToRoman(...c.input))
    console.log('Expected:', c.output)
  }
}

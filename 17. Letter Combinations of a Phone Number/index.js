import config from './config.js'

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let result = []

  for (const digit of digits) {
    result = expand(result, map[digit])
  }

  return result
}

const expand = (strings, combination) => {
  if (strings.length === 0) {
    return combination
  }

  const result = []
  for (const letter of combination) {
    for (const string of strings) {
      result.push(`${string}${letter}`)
    }
  }

  return result
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      letterCombinations(...c.input),
      ', Expected:',
      c.output
    )
  }
}

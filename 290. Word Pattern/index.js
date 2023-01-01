import config from './config.js'

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
  const words = s.split(' '),
    hash = {},
    dedup = new Set()

  if (words.length !== pattern.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern.charAt(i)
    const word = words[i]

    if (!hash[char]) {
      hash[char] = word
      dedup.add(word)
      continue
    }

    if (hash[char] !== word) {
      return false
    }
  }

  return Object.keys(hash).length === dedup.size
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      wordPattern(...c.input),
      ', Expected:',
      c.output
    )
  }
}

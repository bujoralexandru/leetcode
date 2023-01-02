import config from './config.js'

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  return Boolean(word.match(/^[a-z]+$|^[A-Z]+$|^[A-Z][a-z]*$/gm))
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      detectCapitalUse(...c.input),
      ', Expected:',
      c.output
    )
  }
}

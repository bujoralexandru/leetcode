import config from './config.js'

/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
  let flipCount = 0, oneCount = 0

  for (const c of s) {
    if (c === '1') {
      oneCount++
    } else {
      flipCount++
    }

    flipCount = Math.min(flipCount, oneCount)
  }

  return flipCount
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      minFlipsMonoIncr(...c.input),
      ', Expected:',
      c.output
    )
  }
}

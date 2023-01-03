import config from './config.js'

/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function(strs) {
  if (strs.length === 0) {
    return 0
  }

  const n = strs[strs.length - 1].length
  let removed = 0

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) < strs[j - 1].charAt(i)) {
        removed++
        break
      }
    }
  }

  return removed
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      minDeletionSize(...c.input),
      ', Expected:',
      c.output
    )
  }
}

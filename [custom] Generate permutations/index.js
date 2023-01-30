import config from './config.js'

/**
 * @param {string[]} set
 * @param {string} start
 * @return {number}
 */
const generatePermutations = function (set, start) {
  const indexes = Array(set.length + 1).fill(-1),
    maxLen = set.length
  let len = start.length,
    count = 0

  for (let i = 0; i < start.length; i++) {
    indexes[i] = set.indexOf(start[i])
  }

  let sum = 0
  for (let i = 1; i <= maxLen; i++) {
    sum += maxLen ** i
  }

  // console.log(`Total permutations: ${sum}`)

  while (len <= maxLen) {
    const ended = increment(indexes, len, maxLen)
    if (ended) {
      len += 1
      if (len > maxLen) break
    }
    // const permutation = indexes
    //   .slice(0, len)
    //   .map((i) => set[i])
    //   .join('')

    count++
    // console.log(permutation)
  }

  return count
}

const increment = function (indexes, len, maxLen) {
  let carry = 0,
    i = 0

  while (true) {
    indexes[i] += 1
    carry = Math.floor(indexes[i] / maxLen)
    indexes[i] %= maxLen
    if (!carry) break
    i++
  }

  return i === len
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      generatePermutations(...c.input),
      ', Expected:',
      c.output
    )
  }
}

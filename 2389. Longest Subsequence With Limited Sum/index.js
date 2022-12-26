import config from './config.js'

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const answerQueries = function (nums, queries) {
  const result = [],
    cache = {},
    resultCache = {},
    queriesBackup = [...queries]
  let it = 0

  queries.forEach((e, idx) => (cache[e] = idx))

  nums = nums.sort((a, b) => b - a)
  queries = queries.sort((a, b) => b - a)

  while (it < queries.length && nums.length) {
    const sum = nums.reduce((acc, e) => acc + e, 0)
    if (sum > queries[it]) {
      nums = nums.slice(1)
      continue
    }

    resultCache[queries[it]] = nums.length
    it += 1
  }

  for (const query of queriesBackup) {
    result.push(resultCache[query] || 0)
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
      answerQueries(...c.input),
      ', Expected:',
      c.output
    )
  }
}

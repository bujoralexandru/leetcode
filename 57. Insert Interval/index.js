import config from './config.js'

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const result = []

  for (const interval of intervals) {
    if (interval[1] < newInterval[0]) {
      result.push(interval)
      continue
    }

    if (interval[0] > newInterval[1]) {
      result.push(newInterval)
      newInterval = interval
    }

    newInterval[0] = Math.min(interval[0], newInterval[0])
    newInterval[1] = Math.max(interval[1], newInterval[1])
  }

  result.push(newInterval)

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
      insert(...c.input),
      ', Expected:',
      c.output
    )
  }
}

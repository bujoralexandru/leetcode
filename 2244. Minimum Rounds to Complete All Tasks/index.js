import config from './config.js'

/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function(tasks) {
  const hash = {}

  for (let i = 0; i < tasks.length; i++) {
    if (!(tasks[i] in hash)) {
      hash[tasks[i]] = 1
      continue
    }

    hash[tasks[i]] += 1
  }

  let minTaskCount = 0
  for (const count of Object.values(hash)) {
    if (count === 1) {
      return -1
    }

    minTaskCount += Math.ceil(count / 3)
  }

  return minTaskCount
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      minimumRounds(...c.input),
      ', Expected:',
      c.output
    )
  }
}

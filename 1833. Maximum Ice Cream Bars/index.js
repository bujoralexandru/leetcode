import config from './config.js'

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b)

  let i = 0
  while (coins >= costs[i]) {
    coins -= costs[i]
    i++
  }

  return i
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      maxIceCream(...c.input),
      ', Expected:',
      c.output
    )
  }
}

import config from './config.js'

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  const n = gas.length,
    startOrder = cost
      .map((c, i) => [c, i])
      .sort((a, b) => b[0] - a[0])
      .map((e) => (e[1] + 1) % n)

  for (const start of startOrder) {
    let tank = gas[start],
      it = start,
      good = true

    do {
      it = (it + 1) % n
      const gasCost = it - 1 < 0 ? cost[n - 1] : cost[it - 1]

      if (gasCost > tank) {
        good = false
        break
      }

      tank += gas[it] - gasCost
    } while (it !== start)

    if (good) {
      return start
    }
  }

  return -1
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      canCompleteCircuit(...c.input),
      ', Expected:',
      c.output
    )
  }
}

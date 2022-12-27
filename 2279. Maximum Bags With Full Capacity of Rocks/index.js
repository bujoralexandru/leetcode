import config from './config.js'

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = function (capacity, rocks, additionalRocks) {
  let bagsFull = 0,
    i = 0
  const bagsNeeded = []

  while (i < capacity.length) {
    const diff = capacity[i] - rocks[i]
    i++

    if (diff === 0) {
      bagsFull += 1
      continue
    }

    bagsNeeded.push(diff)
  }

  bagsNeeded.sort((a, b) => a - b)
  i = 0

  while (i < bagsNeeded.length && additionalRocks >= bagsNeeded[i]) {
    additionalRocks -= bagsNeeded[i]
    i += 1
    bagsFull += 1
  }

  return bagsFull
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      maximumBags(...c.input),
      ', Expected:',
      c.output
    )
  }
}

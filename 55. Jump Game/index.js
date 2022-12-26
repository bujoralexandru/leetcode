import config from './config.js'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  if (!nums.length) {
    return false
  }
  if (nums.length === 1) {
    return true
  }

  const queue = [0],
    dedup = new Set(),
    numsIndexes = nums.map((e, idx) => idx)
  dedup.add(0)

  while (queue.length) {
    const jumpIndex = queue.shift()
    const jumpSize = nums[jumpIndex]
    dedup.delete(jumpIndex)

    if (jumpSize === 0) {
      continue
    }

    const slice = numsIndexes.slice(jumpIndex + 1, jumpIndex + jumpSize + 1)

    if (slice.length < jumpSize) {
      return true
    }

    if (slice.includes(nums.length - 1)) {
      return true
    }

    for (const sliceItem of slice) {
      if (dedup.has(sliceItem)) {
        continue
      }

      queue.push(sliceItem)
      dedup.add(sliceItem)
    }
  }

  return false
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      canJump(...c.input),
      ', Expected:',
      c.output
    )
  }
}

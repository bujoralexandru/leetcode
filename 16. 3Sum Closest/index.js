import config from './config.js'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let result = Number.MAX_SAFE_INTEGER

  for (let left = 0; left < nums.length; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) {
      continue
    }

    let mid = left + 1
    let right = nums.length - 1

    while (mid < right) {
      const sum = nums[left] + nums[mid] + nums[right]
      if (sum === target) {
        return sum
      }

      const deltaSum = Math.abs(sum - target)
      const deltaResult = Math.abs(result - target)

      if (deltaSum < deltaResult) {
        result = sum
      }

      if (sum > target) {
        right--
      } else if (sum < target) {
        mid++
      }
    }
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
      threeSumClosest(...c.input),
      ', Expected:',
      c.output
    )
  }
}

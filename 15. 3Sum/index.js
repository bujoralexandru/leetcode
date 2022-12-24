import config from './config.js'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  const result = []

  for (let left = 0; left < nums.length; left++) {
    if (left > 0 && nums[left] === nums[left - 1]) {
      continue
    }

    let mid = left + 1
    let right = nums.length - 1

    while (mid < right) {
      const sum = nums[left] + nums[mid] + nums[right]
      if (sum > 0) {
        right--
        continue
      }
      if (sum < 0) {
        mid++
        continue
      }
      if (sum === 0) {
        result.push([nums[left], nums[mid], nums[right]])
        mid++
        while (nums[mid] === nums[mid - 1] && left < right) {
          mid++
        }
      }
    }
  }

  return result
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log('Input:', ...c.input, 'Output:', threeSum(...c.input))
    console.log('Expected:', c.output)
  }
}

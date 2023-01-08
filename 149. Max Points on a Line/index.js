import config from './config.js'

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
  let max = 0

  if (points.length <= 2) {
    return points.length
  }

  for (const p1 of points) {
    const map = new Map()

    for (const p2 of points) {
      if (p1 === p2) {
        continue
      }

      const num =
        p2[0] - p1[0] === 0
          ? Number.POSITIVE_INFINITY
          : (p2[1] - p1[1]) / (p2[0] - p1[0])

      map.set(num, (map.get(num) || 0) + 1)

      max = Math.max(map.get(num), max)
    }
  }

  return max + 1
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      maxPoints(...c.input),
      ', Expected:',
      c.output
    )
  }
}

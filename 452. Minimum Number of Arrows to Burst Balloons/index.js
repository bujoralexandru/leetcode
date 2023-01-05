import config from './config.js'

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  points.sort((l, r) => {
    return l[0] - r[0] || l[1] - r[1]
  })

  const interval = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
  let arrows = 0

  for (let i = 0; i < points.length; i++) {
    const point = points[i]

    if (point[0] > interval[1]) {
      arrows++
      interval[0] = point[0]
      interval[1] = point[1]
      continue
    }

    if (interval[0] < point[0]) {
      interval[0] = point[0]
    }

    if (interval[1] > point[1]) {
      interval[1] = point[1]
    }
  }

  return arrows + 1
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      findMinArrowShots(...c.input),
      ', Expected:',
      c.output
    )
  }
}

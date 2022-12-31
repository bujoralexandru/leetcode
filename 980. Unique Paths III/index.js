import config from './config.js'

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function(grid) {
  let n = grid.length,
    m = grid[n - 1].length,
    start = [0, 0],
    end = [n - 1, m - 1],
    pathLen = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === -1) {
        continue
      }

      pathLen += 1

      if (grid[i][j] === 1) {
        start = [i, j]
        continue
      }

      if (grid[i][j] === 2) {
        end = [i, j]
      }
    }
  }

  const dfs = (i, j, path, result) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === -1) {
      return 0
    }

    if (path === pathLen && end[0] === i && end[1] === j) {
      return 1
    }

    grid[i][j] = -1

    const up = dfs(i - 1, j, path + 1, result)
    const down = dfs(i + 1, j, path + 1, result)
    const left = dfs(i, j - 1, path + 1, result)
    const right = dfs(i, j + 1, path + 1, result)

    grid[i][j] = 0

    return up + down + left + right
  }

  return dfs(start[0], start[1], 1, 0)
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      uniquePathsIII(...c.input),
      ', Expected:',
      c.output
    )
  }
}

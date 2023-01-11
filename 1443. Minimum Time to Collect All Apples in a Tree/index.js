import config from './config.js'

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function(n, edges, hasApple) {
  const nodes = []

  for (const [p, c] of edges) {
    if (!nodes[p]) {
      nodes[p] = []
    }

    if (!nodes[c]) {
      nodes[c] = []
    }

    nodes[p].push(c)
    nodes[c].push(p)
  }

  const dfs = (idx = 0, parent = -1) => {
    let total = 0
    for (const e of nodes[idx]) {
      if (e === parent) {
        continue
      }

      total += dfs(e, idx)
    }

    if (idx && (hasApple[idx] || total > 0)) {
      total += 2
    }

    return total
  }

  return dfs()
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      minTime(...c.input),
      ', Expected:',
      c.output
    )
  }
}

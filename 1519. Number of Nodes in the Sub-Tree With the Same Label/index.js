import config from './config.js'

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const countSubTrees = function (n, edges, labels) {
  const adj = [],
    result = Array(n).fill(1)

  for (const [p, c] of edges) {
    if (!adj[p]) {
      adj[p] = []
    }

    if (!adj[c]) {
      adj[c] = []
    }

    adj[p].push(c)
    adj[c].push(p)
  }

  const dfs = (node = 0, parent = -1) => {
    const count = {}

    for (const n of adj[node] || []) {
      if (n !== parent) {
        const _count = dfs(n, node)
        for (const key in _count) {
          count[key] = (count[key] || 0) + _count[key]
        }
      }
    }

    count[labels[node]] = (count[labels[node]] || 0) + 1
    result[node] = count[labels[node]]

    return count
  }

  dfs()
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
      countSubTrees(...c.input),
      ', Expected:',
      c.output
    )
  }
}

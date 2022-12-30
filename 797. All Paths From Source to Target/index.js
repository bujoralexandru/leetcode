import config from './config.js'

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const result = [],
    n = graph.length

  const recurse = (idx, path) => {
    if (idx === n - 1) {
      return true
    }

    for (const it of graph[idx]) {
      const newPath = [...path, it]
      if (recurse(it, newPath)) {
        result.push(newPath)
      }
    }

    return false
  }

  recurse(0, [0])

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
      allPathsSourceTarget(...c.input),
      ', Expected:',
      c.output
    )
  }
}

import config from './config.js'

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
const longestPath = function (parent, s) {
  const children = new Array(parent.length)
  for (let i = 0; i < parent.length; i++) {
    children[i] = []
  }

  for (let i = 1; i < parent.length; i++) {
    children[parent[i]].push(i)
  }

  let longestPath = 0
  const dfs = (node = 0) => {
    let firstLongest = 0,
      secondLongest = 0

    for (const child of children[node] || []) {
      const lengthChild = dfs(child)

      if (s[node] === s[child]) {
        continue
      }

      if (firstLongest < lengthChild) {
        secondLongest = firstLongest
        firstLongest = lengthChild
      } else if (secondLongest < lengthChild) {
        secondLongest = lengthChild
      }
    }

    longestPath = Math.max(longestPath, firstLongest + secondLongest + 1)
    return firstLongest + 1
  }

  dfs()

  return longestPath
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      longestPath(...c.input),
      ', Expected:',
      c.output
    )
  }
}

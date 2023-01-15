import config from './config.js'

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = function (s1, s2, baseStr) {
  const eq = {}

  for (let i = 0; i < s1.length; i++) {
    union(eq, s1.charCodeAt(i), s2.charCodeAt(i))
  }

  console.log(eq)

  let result = ''

  for (let i = 0; i < baseStr.length; i++) {
    result += String.fromCharCode(find(eq, baseStr.charCodeAt(i)))
  }
  return result
}

function union(eq, x, y) {
  x = find(eq, x)
  y = find(eq, y)

  if (x !== y) {
    eq[Math.max(x, y)] = Math.min(x, y)
  }
}

function find(eq, x) {
  if (!eq[x]) return x
  return (eq[x] = find(eq, eq[x]))
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      smallestEquivalentString(...c.input),
      ', Expected:',
      c.output
    )
  }
}

import config from "./config.js";

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = x < 0 ? -1 : 1
  const res = sign * parseInt(x.toString().split('').reverse().join(''))
  return res > 2 ** 31 - 1 || res < -(2 ** 31) ? 0 : res
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log('Input:', ...c.input, 'Output:', reverse(...c.input))
    console.log('Expected:', c.output)
  }
}

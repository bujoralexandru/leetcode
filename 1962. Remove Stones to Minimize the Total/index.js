import config from './config.js'
import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum = function (piles, k) {
  const queue = new MaxPriorityQueue()
  piles.forEach((e) => queue.enqueue(e, e))

  while (k) {
    k--

    const pile = queue.dequeue()
    const newPile = Math.ceil(pile.element / 2)
    queue.enqueue(newPile, newPile)
  }

  return queue
    .toArray()
    .map((e) => e.element)
    .reduce((acc, e) => acc + e, 0)
}

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      minStoneSum(...c.input),
      ', Expected:',
      c.output
    )
  }
}

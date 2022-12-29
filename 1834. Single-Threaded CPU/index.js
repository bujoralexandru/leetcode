import config from './config.js'
import { MinPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function (tasks) {
  const queue = new MinPriorityQueue(),
    result = []

  tasks = tasks
    .map((e, idx) => [...e, idx])
    .sort((a, b) => {
      const first = a[0] - b[0]
      return first || a[1] - b[1]
    })

  let i = 0,
    time = 0

  do {
    if (!time || (!queue.size() && time < tasks[i][0])) {
      time = tasks[i][0]
    }

    while (i < tasks.length && tasks[i][0] <= time) {
      queue.enqueue(tasks[i], tasks[i][1] - discriminator(tasks[i][2]))
      i++
    }

    while (queue.size() && tasks[i] && time < tasks[i][0]) {
      const item = queue.dequeue()
      result.push(item.element[2])
      time += item.element[1]
    }
  } while (i < tasks.length)

  while (queue.size()) {
    const dequeue = queue.dequeue()
    console.log(time, dequeue)
    result.push(dequeue.element[2])
  }

  return result
}

const discriminator = (idx) => {
  return (MAX - idx) / MAX
}

const MAX = 10 ** 9

// noinspection JSUnusedGlobalSymbols
export function run() {
  for (const c of config) {
    // noinspection JSCheckFunctionSignatures
    console.log(
      'Input:',
      ...c.input,
      ', Output:',
      getOrder(...c.input),
      ', Expected:',
      c.output
    )
  }
}

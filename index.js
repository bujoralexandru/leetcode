const paths = [
  '6. Zigzag Conversion',
  '7. Reverse Integer',
  '8. String to Integer (atoi)',
  '12. Integer to Roman',
  '15. 3Sum',
  '16. 3Sum Closest',
  '17. Letter Combinations of a Phone Number',
  '55. Jump Game',
  '290. Word Pattern',
  '520. Detect Capital',
  '797. All Paths From Source to Target',
  '944. Delete Columns to Make Sorted',
  '980. Unique Paths III',
  '1834. Single-Threaded CPU',
  '1962. Remove Stones to Minimize the Total',
  '2244. Minimum Rounds to Complete All Tasks',
  '2279. Maximum Bags With Full Capacity of Rocks',
  '2389. Longest Subsequence With Limited Sum',
]

const runOnly = [
  // '55. Jump Game'
  // '2279. Maximum Bags With Full Capacity of Rocks',
  // '1962. Remove Stones to Minimize the Total',
  // '1834. Single-Threaded CPU',
  // '797. All Paths From Source to Target',
  // '980. Unique Paths III',
  // '290. Word Pattern',
  // '520. Detect Capital',
  // '944. Delete Columns to Make Sorted',
  '2244. Minimum Rounds to Complete All Tasks',
]

for (const path of runOnly.length ? runOnly : paths) {
  const problem = await import(`./${path}/index.js`)
  if (!problem.run) {
    console.log(`Problem ${path} is not solved yet.`)
    continue
  }
  console.log(`[Start] ${path}`)
  const start = new Date().getTime()
  await problem.run()
  console.log(
    `[End] ${path}.`,
    'Elapsed time:',
    `${new Date().getTime() - start}ms`
  )
  console.log()
}

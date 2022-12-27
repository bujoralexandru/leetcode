const paths = [
  '6. Zigzag Conversion',
  '7. Reverse Integer',
  '8. String to Integer (atoi)',
  '12. Integer to Roman',
  '15. 3Sum',
  '16. 3Sum Closest',
  '17. Letter Combinations of a Phone Number',
  '55. Jump Game',
  '2279. Maximum Bags With Full Capacity of Rocks',
  '2389. Longest Subsequence With Limited Sum',
]

const runOnly = [
  // '55. Jump Game'
  '2279. Maximum Bags With Full Capacity of Rocks',
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

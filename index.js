const paths = [
  '6. Zigzag Conversion',
  '7. Reverse Integer',
  '8. String to Integer (atoi)',
  '12. Integer to Roman',
  '15. 3Sum',
  '16. 3Sum Closest',
  '17. Letter Combinations of a Phone Number',
  '55. Jump Game',
  '57. Insert Interval',
  '134. Gas Station',
  '149. Max Points on a Line',
  '290. Word Pattern',
  '452. Minimum Number of Arrows to Burst Balloons',
  '520. Detect Capital',
  '797. All Paths From Source to Target',
  '926. Flip String to Monotone Increasing',
  '944. Delete Columns to Make Sorted',
  '980. Unique Paths III',
  '1061. Lexicographically Smallest Equivalent String',
  '1443. Minimum Time to Collect All Apples in a Tree',
  '1519. Number of Nodes in the Sub-Tree With the Same Label',
  '1833. Maximum Ice Cream Bars',
  '1834. Single-Threaded CPU',
  '1962. Remove Stones to Minimize the Total',
  '2244. Minimum Rounds to Complete All Tasks',
  '2246. Longest Path With Different Adjacent Characters',
  '2279. Maximum Bags With Full Capacity of Rocks',
  '2389. Longest Subsequence With Limited Sum',
]

const runOnly = ['926. Flip String to Monotone Increasing']

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

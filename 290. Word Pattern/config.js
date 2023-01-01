export default [
  {
    input: ['abba', 'dog cat cat dog'],
    output: true,
  },
  {
    input: ['abba', 'dog cat cat fish'],
    output: false,
  },
  {
    input: ['aaaa', 'dog cat cat dog'],
    output: false,
  },
]

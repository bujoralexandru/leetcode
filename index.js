const paths = [
  "6. Zigzag Conversion",
  "7. Reverse Integer",
  "8. String to Integer (atoi)",
];

for (const path of paths) {
  const problem = await import(`./${path}/index.js`);
  if (!problem.run) {
    console.log(`Problem ${path} is not solved yet.`);
    continue;
  }
  console.log(`[Start] ${path}`);
  await problem.run();
  console.log(`[End] ${path}`);
  console.log();
}

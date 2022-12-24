import config from "./config.json" assert {type: "json"};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const resArr = [];
  let i = 0,
    offsetI = 0;

  if (numRows === 1) {
    return s;
  }

  for (let i = 0; i < numRows; i++) {
    resArr[i] = [];
  }

  for (const char of s) {
    resArr[i].push(char);

    switch (true) {
      case i === 0:
        offsetI = 1;
        break;
      case i === numRows - 1:
        offsetI = -1;
        break;
      default:
        // do nothing
        break;
    }

    i += offsetI;
  }

  return resArr.map((arr) => arr.join("")).join("");
};

for (let i = 0; i < config.length; i++) {
  console.log(convert(...config[i].inputs), config[i].output);
}

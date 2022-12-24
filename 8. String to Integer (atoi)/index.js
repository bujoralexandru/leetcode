import config from "./config.json" assert { type: "json" };

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const split = s.match(/^[\s+-]*[0-9]+([.]?[0-9]+)?/gi);
  const parsed = split?.length ? parseFloat(split[0]) : 0;
  if (isNaN(parsed)) {
    return 0;
  }

  switch (true) {
    case parsed > 2 ** 31 - 1:
      return 2 ** 31 - 1;
    case parsed < -(2 ** 31):
      return -(2 ** 31);
    default:
      return parsed;
  }
};

for (const c of config) {
  console.log("Input:", ...c.input, "Output:", myAtoi(...c.input));
  console.log("Expected:", c.output);
}

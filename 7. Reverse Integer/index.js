import config from "./config.json" assert {type: "json"};

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  const res = sign * parseInt(x.toString().split("").reverse().join(""));
  return res > 2 ** 31 - 1 || res < -(2 ** 31) ? 0 : res;
};

for (const c of config) {
  console.log("Input:", ...c.input, "Output:", reverse(...c.input));
  console.log("Expected:", c.output);
}

function multiply(...numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
}
module.exports = multiply;
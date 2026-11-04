// TC: O(n), SC: O(1)
function sumNumbers(numbers) {
  let total = 0;
  for (const number of numbers) total += number;
  return total;
}

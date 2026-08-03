function solution05(numbers) {
  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total;
}

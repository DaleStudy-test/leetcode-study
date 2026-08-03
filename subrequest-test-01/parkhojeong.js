function solution01(numbers) {
  const sum = numbers.reduce((aggregate, number) => aggregate + number, 0);
  return sum;
}

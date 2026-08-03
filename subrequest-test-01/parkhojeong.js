function solution01(numbers) {
  return numbers.reduce((aggregate, number) => aggregate + number, 0);
}

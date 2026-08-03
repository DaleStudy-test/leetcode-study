function solution01(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum;
}

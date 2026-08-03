function solution02(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum;
}

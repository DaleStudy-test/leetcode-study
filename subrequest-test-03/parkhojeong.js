function solution03(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum;
}

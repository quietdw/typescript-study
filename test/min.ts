function min(a: number, b: number): number {
  if (a > b) {
    return b;
  }
  return a;
}

console.log(min(2, 3));

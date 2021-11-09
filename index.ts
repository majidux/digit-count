function digitCount(input) {
  let pages = Number(input);
  let result = BigInt(0);
  let max = 0;
  let pow = `${BigInt(pages)}`.length;
  let min = 0;
  //   pow = Number(Math.ceil(Math.log10(pages)));
  while (pages > 0) {
    max = Number(pages);
    pow -= 1;
    min = Math.pow(10, pow);
    result += BigInt((pow + 1) * (max - min + 1));
    pages = min - 1;
  }
  return result;
}

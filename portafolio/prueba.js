function find_max() {
  let max_num = Number.NEGATIVE_INFINITY;

  let a = 1;
  let b = [1, 2, 3, 4];
  for (a of b) {
    if (a > max_num) {
      max_num = a;
    }
  }
  return max_num;
}

console.log(find_max());

console.log(1);

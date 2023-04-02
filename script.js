// bubble sort implement javascript

a = [12, 65, 3, 76, 23, 71];

for (let x = 0; x < a.length; x++) {
  for (let y = 0 - x; y <= a.length; y++) {
    if (a[y] > a[y + 1]) {
      let b = a[y];
      a[y] = a[y + 1];
      a[y + 1] = b;
    }
  }
}

console.log(a);

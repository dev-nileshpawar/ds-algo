const findElement = (aa, key) => {
  for (let i = 0; i < aa.length; i++) {
    if (aa[i]===key) {
      return i;
    }
    console.log(i)
  }

  return -1;
};

const result = findElement([23,5,23,12,21], 5);
console.log(result)
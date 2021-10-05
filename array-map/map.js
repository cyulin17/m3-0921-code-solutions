function map(array, transform) {
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    const result = transform(array[i]);
    newArr.push(result);
  }
  return newArr;
}

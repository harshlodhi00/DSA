/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  if (size <= 0) {
    return "Size must be a positive integer.";
  }

  const chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
};
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function hasDuplicateValueArrayOfObjectsBykey(array, key) {
  const arr = array.map(item => item[key]);
  return new Set(arr).size !== arr.length;
}

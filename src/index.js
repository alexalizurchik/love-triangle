/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let couples = 0;

  for (let i = 0; i < preferences.length; i++) {
    const indOfFirstLover = getIndOfFirstLover(preferences, i);
    const indOfSecondLover = getIndOfSecondLover(preferences, i);

    if (
      i === getIndOfThirdLover(preferences, i) &&
      preferences[i] !== preferences[indOfFirstLover] &&
      preferences[i] !== preferences[indOfSecondLover]
    ) {
      couples++;

      delete preferences[indOfSecondLover];
      delete preferences[indOfFirstLover];
      delete preferences[i];
    }
  }

  return couples;
}

function getIndOfFirstLover(arr, i) {
  return arr[i] - 1;
}

function getIndOfSecondLover(arr, i) {
  return arr[getIndOfFirstLover(arr, i)] - 1;
}

function getIndOfThirdLover(arr, i) {
  return arr[getIndOfSecondLover(arr, i)] - 1;
}

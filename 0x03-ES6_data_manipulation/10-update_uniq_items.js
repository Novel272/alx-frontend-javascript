/**
 * Changes the quanity of uniq grocery item to 100.
 * @param {Map<String  number>} map - A map of the name
 * grocery and its quantity.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}

export const weakMap = new WeakMap();

/**
 * The maximu numbr of cals for a endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks thenumber of calls made to an API's endpoint.
 * @param {{
 *   protocol:Sting,
 *   name: Strig,
 * }} endpoint - The endpoint to make a reques
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}

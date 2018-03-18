import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isFalse
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isFalse<T>(value: T, message: string = '', id: string = ''): T {
  if (value as any === false) {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_FALSE, value, 'bool[false]', message, id);
}
import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isTrue
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isTrue<T>(value: T, message: string = '', id: string = ''): T {
  if (value as any === true) {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_TRUE, value, 'bool[true]', message, id);
}
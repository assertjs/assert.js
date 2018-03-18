import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isNotFalse
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isNotFalse<T>(value: T, message: string = '', id: string = ''): T {
  if (value as any !== false) {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_NOT_FALSE, value, '!false', message, id);
}
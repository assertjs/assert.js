import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isNotBool
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isNotBool<T>(value: T, message: string = '', id: string = ''): T {
  if (typeof value !== 'boolean') {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_NOT_BOOL, value, '!bool', message, id);
}
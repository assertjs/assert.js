import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isBool
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isBool<T>(value: T, message: string = '', id: string = ''): T {
  if (typeof value === 'boolean') {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_BOOL, value, 'bool', message, id);
}
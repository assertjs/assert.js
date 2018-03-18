import { TypeError } from '../errors/type-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert isNotTrue
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isNotTrue<T>(value: T, message: string = '', id: string = ''): T {
  if (value as any !== true) {
    return value;
  }

  throw TypeError.throw(assertionTypes.IS_NOT_TRUE, value, '!true', message, id);
}
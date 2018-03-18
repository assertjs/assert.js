import { UnexpectedValueError } from '../errors/unexpected-value-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert notInstanceOf
 * @param {T} value
 * @param excludedInstance
 * @param message
 * @param id
 * @returns {T}
 */
export function notInstanceOf<T>(value: T, excludedInstance: any, message: string = '', id: string = ''): T {
  if (!(value instanceof excludedInstance)) {
    return value;
  }

  throw UnexpectedValueError.throw(assertionTypes.NOT_INSTANCE_OF, value, excludedInstance, message, id);
}
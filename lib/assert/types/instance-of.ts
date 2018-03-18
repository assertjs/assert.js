import { UnexpectedValueError } from '../errors/unexpected-value-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert instanceOf
 * @param {T} value
 * @param expectedInstance
 * @param message
 * @param id
 * @returns {T}
 * @throws UnexpectedValueError
 */
export function instanceOf<T>(value: T, expectedInstance: any, message: string = '', id: string = ''): T {
  if (value instanceof expectedInstance) {
    return value;
  }

  throw UnexpectedValueError.throw(assertionTypes.INSTANCE_OF, value, expectedInstance, message, id);
}
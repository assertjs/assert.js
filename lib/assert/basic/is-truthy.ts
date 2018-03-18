import { LogicError } from '../errors/logic-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert if given value is truthy
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isTruthy<T>(value: T, message: string = '', id: string = ''): T {
  if (value) {
    return value;
  }

  throw LogicError.throw(assertionTypes.IS_TRUTHY, value, message, id);
}
import { LogicError } from '../errors/logic-error';
import { assertionTypes } from '../assertion-types';

/**
 * Assert if given value is empty
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
export function isEmpty<T>(value: T, message: string = '', id: string = ''): T {
  if (
    (typeof value === 'string' && value.length !== 0) ||
    (typeof value === 'number' && value !== 0) ||
    (typeof value === 'function') ||
    (typeof value === 'symbol')
  ) {
    return value;
  }

  // Check if object has any property
  // if (typeof value === 'object' && value !== null) {
  //   for (let key in value) {
  //     if (hasOwnProperty.call(value, key)) {
  //       return value;
  //     }
  //   }
  // }

  throw LogicError.throw(assertionTypes.IS_EMPTY, value, message, id);
}
import { LogicException } from '../exceptions/LogicException';
import { assertionTypes } from '../assertionTypes';

/**
 * Assert if given value is empty
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isEmpty(value: any, message: string = '', id: string = ''): void {
  if (
    this.enabled &&
    (
      (typeof value === 'string' && value.length === 0) ||
      (typeof value === 'number' && value === 0)
    )
  ) {
    throw LogicException.throw(assertionTypes.IS_EMPTY, value, message, id);
  }
}
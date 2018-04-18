import { LogicException } from '../exceptions/LogicException';
import { assertionTypes } from '../assertionTypes';

/**
 * Assert if given value is truthy
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isTruthy(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && !value) {
    throw LogicException.throw(assertionTypes.IS_TRUTHY, value, message, id);
  }
}
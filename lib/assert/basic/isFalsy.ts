import { LogicException } from '../exceptions/LogicException';
import { assertionTypes } from '../assertionTypes';

/**
 * Assert if given value is falsy
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isFalsy(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && value) {
    throw LogicException.throw(assertionTypes.IS_FALSY, value, message, id);
  }
}
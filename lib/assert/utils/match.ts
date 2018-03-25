import { LogicException } from '../exceptions/LogicException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value match provided RegExp
 * @param {string} value
 * @param {RegExp} regExp
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function match(value: string, regExp: RegExp, message: string = '', id: string = ''): void {
  if (this.enabled && !regExp.test(value)) {
    throw LogicException.throw(assertionTypes.MATCH, value, message, id);
  }
}
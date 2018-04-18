import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not false
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNotFalse(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && value === false) {
    throw ValueException.expectedValue(assertionTypes.IS_NOT_FALSE, value, false, message, id);
  }
}
import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not true
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNotTrue(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && value === true) {
    throw ValueException.expectedValue(assertionTypes.IS_NOT_TRUE, value, true, message, id);
  }
}
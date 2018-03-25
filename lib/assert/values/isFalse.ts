import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is false
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isFalse(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && value !== false) {
    throw ValueException.unexpectedValue(assertionTypes.IS_FALSE, value, false, message, id);
  }
}
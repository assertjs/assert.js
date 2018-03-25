import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is true
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isTrue(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && value !== true) {
    throw ValueException.unexpectedValue(assertionTypes.IS_TRUE, value, true, message, id);
  }
}
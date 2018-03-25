import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is null
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNull(value: any, message: string = '', id: string = '') {
  if (this.enabled && value !== null) {
    throw ValueException.unexpectedValue(assertionTypes.IS_NULL, value, null, message, id);
  }
}
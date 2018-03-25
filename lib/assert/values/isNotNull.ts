import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not null
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNotNull(value: any, message: string = '', id: string = '') {
  if (this.enabled && value === null) {
    throw ValueException.expectedValue(assertionTypes.IS_NOT_NULL, value, null, message, id);
  }
}
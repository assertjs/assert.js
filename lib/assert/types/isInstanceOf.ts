import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is an expected instance
 * @param value
 * @param {Function} expectedInstance
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isInstanceOf(value: any, expectedInstance: Function, message: string = '', id: string = ''): void {
  if (this.enabled && !(value instanceof expectedInstance)) {
    throw ValueException.unexpectedValue(assertionTypes.INSTANCE_OF, value, expectedInstance, message, id);
  }
}
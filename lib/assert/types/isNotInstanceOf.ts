import { ValueException } from '../exceptions/ValueException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not instance of excluded instance
 * @param value
 * @param {Function} excludedInstance
 * @param {string} message
 * @param {string} id
 */
export function isNotInstanceOf(value: any, excludedInstance: Function, message: string = '', id: string = ''): void {
  if (this.enabled && value instanceof excludedInstance) {
    throw ValueException.expectedValue(assertionTypes.NOT_INSTANCE_OF, value, excludedInstance, message, id);
  }
}
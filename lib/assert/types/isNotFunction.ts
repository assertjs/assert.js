import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not function
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNotFunction(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value === 'function') {
    throw TypeException.unexpectedType(assertionTypes.IS_NOT_FUNCTION, value, '<function>', message, id);
  }
}
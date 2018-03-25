import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is function
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isFunction(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value !== 'function') {
    throw TypeException.expectedType(assertionTypes.IS_FUNCTION, value, '<function>', message, id);
  }
}
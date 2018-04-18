import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not an array
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotArray(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && Array.isArray(value)) {
    throw TypeException.expectedType(assertionTypes.IS_NOT_ARRAY, value, '<array>', message, id);
  }
}
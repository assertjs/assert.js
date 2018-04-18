import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is an array
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isArray(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && !Array.isArray(value)) {
    throw TypeException.unexpectedType(assertionTypes.IS_ARRAY, value, '<array>', message, id);
  }
}
import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not string
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotString(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && (typeof value === 'string' || value as any instanceof String)) {
    throw TypeException.expectedType(assertionTypes.IS_NOT_STRING, value, '<string>', message, id);
  }
}
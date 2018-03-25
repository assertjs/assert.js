import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotNumber(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && (typeof value === 'number' || value as any instanceof Number)) {
    throw TypeException.expectedType(assertionTypes.IS_NOT_NUMBER, value, '<number>', message, id);
  }
}
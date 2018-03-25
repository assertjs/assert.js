import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not float (number with value after decimal point)
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotFloat(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value === 'number' && value % 1 === 0) {
    throw TypeException.expectedType(assertionTypes.IS_NOT_FLOAT, value, '<float>', message, id);
  }
}
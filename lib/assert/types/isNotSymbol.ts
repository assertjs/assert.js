import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not an Symbol
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotSymbol(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value === 'symbol') {
    throw TypeException.expectedType(assertionTypes.IS_NOT_SYMBOL, value, '<symbol>', message, id);
  }
}
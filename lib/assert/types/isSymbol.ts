import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is Symbol
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isSymbol(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value !== 'symbol') {
    throw TypeException.unexpectedType(assertionTypes.IS_SYMBOL, value, '<symbol>', message, id);
  }
}
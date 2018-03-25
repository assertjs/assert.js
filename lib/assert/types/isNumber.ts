import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNumber(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && !(typeof value === 'number' || value as any instanceof Number)) {
    throw TypeException.unexpectedType(assertionTypes.IS_NUMBER, value, '<number>', message, id);
  }
}
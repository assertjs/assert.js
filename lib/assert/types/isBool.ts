import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is boolean
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isBool(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value !== 'boolean') {
    throw TypeException.unexpectedType(assertionTypes.IS_BOOL, value, '<boolean>', message, id);
  }
}
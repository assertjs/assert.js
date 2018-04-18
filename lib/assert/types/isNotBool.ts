import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is not boolean
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isNotBool(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && typeof value === 'boolean') {
    throw TypeException.expectedType(assertionTypes.IS_NOT_BOOL, value, '<boolean>', message, id);
  }
}
import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is undefined
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isUndefined(value: any, message: string = '', id: string = '') {
  if (this.enabled && value !== undefined) {
    throw TypeException.unexpectedType(assertionTypes.IS_UNDEFINED, value, '<undefined>', message, id);
  }
}
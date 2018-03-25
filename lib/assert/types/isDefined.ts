import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is defined (have type other than undefined)
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
export function isDefined(value: any, message: string = '', id: string = '') {
  if (this.enabled && value === undefined) {
    throw TypeException.expectedType(assertionTypes.IS_DEFINED, value, '<undefined>', message, id);
  }
}
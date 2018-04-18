import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is other than Not a Number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNotNaN(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && Number.isNaN(value)) {
    throw TypeException.expectedType(assertionTypes.IS_NOT_NAN, value, '<NaN>', message, id);
  }
}
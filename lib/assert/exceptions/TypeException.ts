import { AssertionException } from './AssertionException';
import { assertionTypes } from '../assertionTypes';

/**
 * TypeException class used for throwing AssertionException when provided value have wrong type
 * For wrong value use ValueException class
 */
export class TypeException {
  /**
   * Throw unexpected type error
   * Type of value provided is not compatible with expected type
   *
   * @param {assertionTypes} type
   * @param value
   * @param {string} expectedType
   * @param {string} message
   * @param {string} id
   * @returns {AssertionException}
   */
  static unexpectedType(type: assertionTypes, value: any, expectedType: string, message: string, id: string) {
    let msg = 'TypeException' + "\n";
    msg += (message || 'The specified type does not match the expected type') + "\n\n";
    msg += 'Current type: ' + (typeof value) + "\n";
    msg += 'Expected type: ' + expectedType + "\n";

    return new AssertionException(type, msg, id);
  }

  /**
   * Throw expected type error
   * Type of value provided is compatible with type which is unwanted
   *
   * @param {assertionTypes} type
   * @param value
   * @param {string} unexpectedType
   * @param {string} message
   * @param {string} id
   * @returns {AssertionException}
   */
  static expectedType(type: assertionTypes, value: any, unexpectedType: string, message: string, id: string) {
    let msg = 'TypeException' + "\n";
    msg += (message || 'The specified type is unwanted') + "\n\n";
    msg += 'Current type: ' + (typeof value) + "\n";
    msg += 'Unwanted type: ' + unexpectedType + "\n";

    return new AssertionException(type, msg, id);
  }
}
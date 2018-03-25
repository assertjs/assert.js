import { AssertionException } from './AssertionException';
import { assertionTypes } from '../assertionTypes';
import { ValueFormatter } from '../ValueFormatter';

/**
 * ValueException class used for throwing AssertionException when provided value have wrong value
 * For wrong type of value use TypeException class
 */
export class ValueException {
  /**
   * Throw unexpected value error
   * Value provided is not compatible with expected value
   *
   * @param {assertionTypes} type
   * @param currentValue
   * @param expectedValue
   * @param {string} message
   * @param {string} id
   * @returns {AssertionException}
   */
  static unexpectedValue(type: assertionTypes, currentValue: any, expectedValue: any, message: string, id: string) {
    let msg = 'ValueException' + "\n";
    msg += (message || 'The value provided is not compatible with the expected value') + "\n\n";
    msg += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
    msg += 'Expected value: ' + ValueFormatter.format(expectedValue) + "\n";

    return new AssertionException(type, msg, id);
  }

  /**
   * Throw expected value error
   * Value provided is compatible with value which is unwanted
   *
   * @param {assertionTypes} type
   * @param currentValue
   * @param unexpectedValue
   * @param {string} message
   * @param {string} id
   * @returns {AssertionException}
   */
  static expectedValue(type: assertionTypes, currentValue: any, unexpectedValue: any, message: string, id: string) {
    let msg = 'ValueException' + "\n";
    msg += (message || 'The value provided is unwanted') + "\n\n";
    msg += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
    msg += 'Unwanted value: ' + ValueFormatter.format(unexpectedValue) + "\n";

    return new AssertionException(type, msg, id);
  }
}
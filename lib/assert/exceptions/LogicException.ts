import { AssertionException } from './AssertionException';
import { assertionTypes } from '../assertionTypes';
import { ValueFormatter } from "../ValueFormatter";

export class LogicException {
  /**
   * Throw logic exception
   * @param {assertionTypes} type
   * @param value
   * @param {string} message
   * @param {string} id
   * @returns {AssertionException}
   */
  static throw(type: assertionTypes, value: any, message: string, id: string) {
    let msg = 'LogicException' + "\n";
    msg += (message || 'The provided value causes the LogicException') + "\n\n";
    msg += 'Value: ' + ValueFormatter.format(value) + "\n";

    return new AssertionException(type, msg, id);
  }
}
import { AssertionException } from '../exceptions/AssertionException';
import { assertionTypes } from '../assertionTypes';

/**
 * Always throw AssertError
 * @param message
 * @param id
 * @returns {void}
 */
export function fail(message: string = '', id: string = ''): void {
  if (this.enabled) {
    throw new AssertionException(assertionTypes.FAIL, message, id);
  }
}
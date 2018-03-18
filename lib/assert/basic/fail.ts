import { AssertionError } from '../errors/assertion-error';
import { assertionTypes } from '../assertion-types';

/**
 * Always throw AssertError
 * @param message
 * @param id
 * @returns void
 */
export function fail(message: string = '', id: string = '') {
  throw new AssertionError(assertionTypes.FAIL, message, id);
}
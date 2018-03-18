import { AssertionError } from './assertion-error';
import { assertionTypes } from '../assertion-types';

export class TypeError {
  static throw(type: assertionTypes, value: any, expectedType: string, message: string, id: string) {
    message = 'TypeError' + "\n";
    message += 'The specified type does not match the expected type' + "\n\n";
    message += 'Current type: ' + (typeof value) + "\n";
    message += 'Expected type: ' + expectedType + "\n";

    return new AssertionError(type, message, id);
  }
}
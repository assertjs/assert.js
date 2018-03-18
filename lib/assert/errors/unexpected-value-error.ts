import { AssertionError } from './assertion-error';
import { assertionTypes } from '../assertion-types';
import { ValueFormatter } from '../value-formatter';

export class UnexpectedValueError {
  static throw(type: assertionTypes, currentValue: any, expectedValue: any, message: string, id: string) {

    message = 'UnexpectedValueError' + "\n";
    message += 'The value provided is not compatible with the expected value' + "\n\n";
    message += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
    message += 'Expected value: ' + ValueFormatter.format(expectedValue) + "\n";

    return new AssertionError(type, message, id);
  }
}
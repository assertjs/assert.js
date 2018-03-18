import { AssertionError } from './assertion-error';
import { assertionTypes } from '../assertion-types';

export class LogicError {
  static throw(type: assertionTypes, value: any, message: string, id: string) {
    console.log('Logic error value: ', value);

    return new AssertionError(type, message, id);
  }
}
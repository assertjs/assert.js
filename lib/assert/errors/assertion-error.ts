import { assertionTypes } from '../assertion-types';

/**
 * Basic assertion error class
 * It is used to be thrown when assertion failed
 * You can precise discover assertion which caused error by type or id
 * @class
 */
export class AssertionError extends Error {
  type: assertionTypes;
  id: string;

  constructor(type: assertionTypes, message: string, id: string) {
    super(message);

    this.type = type;
    this.id = id;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
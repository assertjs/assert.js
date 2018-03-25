import { assertionTypes } from '../assertionTypes';

/**
 * Basic assertion exception class
 * It is used to be thrown when assertion failed
 * You can precise discover assertion which caused error by type or id
 * @extends Error
 */
export class AssertionException extends Error {
  protected type: assertionTypes;
  protected id: string;

  /**
   * Create AssertionException based on type, message and id
   * @param {assertionTypes} type - Assertion type
   * @param {string} message - Custom error message
   * @param {string} id - Exception id
   */
  constructor(type: assertionTypes, message: string, id: string) {
    super(message);

    this.type = type;
    this.id = id;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Get type of exception
   * @returns {assertionTypes}
   */
  getType(): assertionTypes {
    return this.type;
  }

  /**
   * Get id of exception
   * @returns {string}
   */
  getId(): string {
    return this.id;
  }
}
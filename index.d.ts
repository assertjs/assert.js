/* Assert.js type declarations */

export default assert;

export enum assertionTypes {
    FAIL = 0,
    IS_TRUTHY = 1,
    IS_FALSY = 2,
    IS_EMPTY = 3,
    IS_NOT_EMPTY = 4,
    IS_DEFINED = 5,
    IS_UNDEFINED = 6,
    IS_NULL = 7,
    IS_NOT_NULL = 8,
    IS_BOOL = 9,
    IS_NOT_BOOL = 10,
    IS_TRUE = 11,
    IS_NOT_TRUE = 12,
    IS_FALSE = 13,
    IS_NOT_FALSE = 14,
    IS_NUMBER = 15,
    IS_NOT_NUMBER = 16,
    IS_NAN = 17,
    IS_NOT_NAN = 18,
    IS_STRING = 19,
    IS_NOT_STRING = 20,
    IS_ARRAY = 21,
    IS_NOT_ARRAY = 22,
    IS_FUNCTION = 23,
    IS_NOT_FUNCTION = 24,
    IS_SYMBOL = 25,
    IS_NOT_SYMBOL = 26,
    INSTANCE_OF = 27,
    NOT_INSTANCE_OF = 28,
    ONE_OF_TYPE = 29,
    NOT_ONE_OF_TYPE = 30,
    EQUAL = 31,
    NOT_EQUAL = 32,
    GREATER_THAN = 33,
    GREATER_THAN_OR_EQUAL = 34,
    LOWER_THAN = 35,
    LOWER_THAN_OR_EQUAL = 36,
    BETWEEN = 37,
    OUTSIDE = 38,
}

/**
  * Basic assertion error class
  * It is used to be thrown when assertion failed
  * You can precise discover assertion which caused error by type or id
  * @class
  */
export class AssertionError extends Error {
    type: assertionTypes;
    id: string;
    constructor(type: assertionTypes, message: string, id: string);
}

/**
  * Always throw AssertError
  * @param message
  * @param id
  * @returns void
  */
export function fail(message?: string, id?: string): void;

/**
  * Assert if given value is truthy
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isTruthy<T>(value: T, message?: string, id?: string): T;

/**
  * Assert if given value is falsy
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isFalsy<T>(value: T, message?: string, id?: string): T;

/**
  * Assert if given value is empty
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isEmpty<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isBool
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isBool<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isNotBool
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isNotBool<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isTrue
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isTrue<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isNotTrue
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isNotTrue<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isFalse
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isFalse<T>(value: T, message?: string, id?: string): T;

/**
  * Assert isNotFalse
  * @param {T} value
  * @param message
  * @param id
  * @returns {T}
  */
export function isNotFalse<T>(value: T, message?: string, id?: string): T;

/**
  * Assert instanceOf
  * @param {T} value
  * @param expectedInstance
  * @param message
  * @param id
  * @returns {T}
  * @throws UnexpectedValueError
  */
export function instanceOf<T>(value: T, expectedInstance: any, message?: string, id?: string): T;


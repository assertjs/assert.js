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
    IS_BOOL = 7,
    IS_NOT_BOOL = 8,
    IS_NUMBER = 9,
    IS_NOT_NUMBER = 10,
    IS_FLOAT = 11,
    IS_NOT_FLOAT = 12,
    IS_NAN = 13,
    IS_NOT_NAN = 14,
    IS_STRING = 15,
    IS_NOT_STRING = 16,
    IS_ARRAY = 17,
    IS_NOT_ARRAY = 18,
    IS_FUNCTION = 19,
    IS_NOT_FUNCTION = 20,
    IS_SYMBOL = 21,
    IS_NOT_SYMBOL = 22,
    INSTANCE_OF = 23,
    NOT_INSTANCE_OF = 24,
    IS_TRUE = 25,
    IS_NOT_TRUE = 26,
    IS_FALSE = 27,
    IS_NOT_FALSE = 28,
    IS_NULL = 29,
    IS_NOT_NULL = 30,
    MATCH = 31,
}

/**
    * Property holding status of assertions activity
    * @type {boolean}
    */
export let enabled: boolean;
/**
    * Disable assertions
    */
export function disable(): void;
/**
    * Enable assertions
    */
export function enable(): void;

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
        constructor(type: assertionTypes, message: string, id: string);
        /**
            * Get type of exception
            * @returns {assertionTypes}
            */
        getType(): assertionTypes;
        /**
            * Get id of exception
            * @returns {string}
            */
        getId(): string;
}

/**
  * Always throw AssertError
  * @param message
  * @param id
  * @returns {void}
  */
export function fail(message?: string, id?: string): void;

/**
  * Assert if given value is truthy
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isTruthy(value: any, message?: string, id?: string): void;

/**
  * Assert if given value is falsy
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isFalsy(value: any, message?: string, id?: string): void;

/**
  * Assert if given value is empty
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isEmpty(value: any, message?: string, id?: string): void;

/**
  * Assert if given value is not empty
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotEmpty(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is defined (have type other than undefined)
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isDefined(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is undefined
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isUndefined(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is boolean
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isBool(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not boolean
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotBool(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is number
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNumber(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not number
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotNumber(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is float (number with value after decimal point)
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isFloat(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not float (number with value after decimal point)
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotFloat(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is Not a Number
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNaN(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is other than Not a Number
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotNaN(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is string
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isString(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not string
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotString(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is an array
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isArray(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not an array
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotArray(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is function
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isFunction(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not function
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotFunction(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is Symbol
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isSymbol(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not an Symbol
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns void
  */
export function isNotSymbol(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is an expected instance
  * @param value
  * @param {Function} expectedInstance
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isInstanceOf(value: any, expectedInstance: Function, message?: string, id?: string): void;

/**
  * Check if provided value is not instance of excluded instance
  * @param value
  * @param {Function} excludedInstance
  * @param {string} message
  * @param {string} id
  */
export function isNotInstanceOf(value: any, excludedInstance: Function, message?: string, id?: string): void;

/**
  * Check if provided value is true
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isTrue(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not true
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotTrue(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is false
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isFalse(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not false
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotFalse(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is null
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNull(value: any, message?: string, id?: string): void;

/**
  * Check if provided value is not null
  * @param value
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function isNotNull(value: any, message?: string, id?: string): void;

/**
  * Check if provided value match provided RegExp
  * @param {string} value
  * @param {RegExp} regExp
  * @param {string} message
  * @param {string} id
  * @returns {void}
  */
export function match(value: string, regExp: RegExp, message?: string, id?: string): void;


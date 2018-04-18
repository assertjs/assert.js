/**
  Assert.js - javascript assertions library
  Version: 1.0.0
  Build: Sun, 25 Mar 2018 16:34:03 GMT
  @license MIT
  @preserve
*/
'use strict';

var assertionTypes;
(function (assertionTypes) {
    // Basic
    assertionTypes[assertionTypes["FAIL"] = 0] = "FAIL";
    assertionTypes[assertionTypes["IS_TRUTHY"] = 1] = "IS_TRUTHY";
    assertionTypes[assertionTypes["IS_FALSY"] = 2] = "IS_FALSY";
    assertionTypes[assertionTypes["IS_EMPTY"] = 3] = "IS_EMPTY";
    assertionTypes[assertionTypes["IS_NOT_EMPTY"] = 4] = "IS_NOT_EMPTY";
    // Types
    assertionTypes[assertionTypes["IS_DEFINED"] = 5] = "IS_DEFINED";
    assertionTypes[assertionTypes["IS_UNDEFINED"] = 6] = "IS_UNDEFINED";
    assertionTypes[assertionTypes["IS_BOOL"] = 7] = "IS_BOOL";
    assertionTypes[assertionTypes["IS_NOT_BOOL"] = 8] = "IS_NOT_BOOL";
    assertionTypes[assertionTypes["IS_NUMBER"] = 9] = "IS_NUMBER";
    assertionTypes[assertionTypes["IS_NOT_NUMBER"] = 10] = "IS_NOT_NUMBER";
    assertionTypes[assertionTypes["IS_FLOAT"] = 11] = "IS_FLOAT";
    assertionTypes[assertionTypes["IS_NOT_FLOAT"] = 12] = "IS_NOT_FLOAT";
    assertionTypes[assertionTypes["IS_NAN"] = 13] = "IS_NAN";
    assertionTypes[assertionTypes["IS_NOT_NAN"] = 14] = "IS_NOT_NAN";
    assertionTypes[assertionTypes["IS_STRING"] = 15] = "IS_STRING";
    assertionTypes[assertionTypes["IS_NOT_STRING"] = 16] = "IS_NOT_STRING";
    assertionTypes[assertionTypes["IS_ARRAY"] = 17] = "IS_ARRAY";
    assertionTypes[assertionTypes["IS_NOT_ARRAY"] = 18] = "IS_NOT_ARRAY";
    assertionTypes[assertionTypes["IS_FUNCTION"] = 19] = "IS_FUNCTION";
    assertionTypes[assertionTypes["IS_NOT_FUNCTION"] = 20] = "IS_NOT_FUNCTION";
    assertionTypes[assertionTypes["IS_SYMBOL"] = 21] = "IS_SYMBOL";
    assertionTypes[assertionTypes["IS_NOT_SYMBOL"] = 22] = "IS_NOT_SYMBOL";
    assertionTypes[assertionTypes["INSTANCE_OF"] = 23] = "INSTANCE_OF";
    assertionTypes[assertionTypes["NOT_INSTANCE_OF"] = 24] = "NOT_INSTANCE_OF";
    // Values
    assertionTypes[assertionTypes["IS_TRUE"] = 25] = "IS_TRUE";
    assertionTypes[assertionTypes["IS_NOT_TRUE"] = 26] = "IS_NOT_TRUE";
    assertionTypes[assertionTypes["IS_FALSE"] = 27] = "IS_FALSE";
    assertionTypes[assertionTypes["IS_NOT_FALSE"] = 28] = "IS_NOT_FALSE";
    assertionTypes[assertionTypes["IS_NULL"] = 29] = "IS_NULL";
    assertionTypes[assertionTypes["IS_NOT_NULL"] = 30] = "IS_NOT_NULL";
    // Expressions
    // EQUAL,
    // NOT_EQUAL,
    // GREATER_THAN,
    // GREATER_THAN_OR_EQUAL,
    // LOWER_THAN,
    // LOWER_THAN_OR_EQUAL,
    // BETWEEN,
    // OUTSIDE,
    // Utils
    assertionTypes[assertionTypes["MATCH"] = 31] = "MATCH";
})(assertionTypes || (assertionTypes = {}));

/**
 * Property holding status of assertions activity
 * @type {boolean}
 */
var enabled = true;
/**
 * Disable assertions
 */
function disable() {
    enabled = false;
}
/**
 * Enable assertions
 */
function enable() {
    enabled = true;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Basic assertion exception class
 * It is used to be thrown when assertion failed
 * You can precise discover assertion which caused error by type or id
 * @extends Error
 */
var AssertionException = /** @class */ (function (_super) {
    __extends(AssertionException, _super);
    /**
     * Create AssertionException based on type, message and id
     * @param {assertionTypes} type - Assertion type
     * @param {string} message - Custom error message
     * @param {string} id - Exception id
     */
    function AssertionException(type, message, id) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.id = id;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    /**
     * Get type of exception
     * @returns {assertionTypes}
     */
    AssertionException.prototype.getType = function () {
        return this.type;
    };
    /**
     * Get id of exception
     * @returns {string}
     */
    AssertionException.prototype.getId = function () {
        return this.id;
    };
    return AssertionException;
}(Error));

/**
 * Always throw AssertError
 * @param message
 * @param id
 * @returns {void}
 */
function fail(message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled) {
        throw new AssertionException(assertionTypes.FAIL, message, id);
    }
}

/**
 * Render any value with human readable form
 * @class
 */
var ValueFormatter = /** @class */ (function () {
    function ValueFormatter() {
    }
    /**
     * Format value according to its type
     *
     * @param value
     * @returns {string}
     */
    ValueFormatter.format = function (value) {
        var type = typeof value;
        switch (true) {
            // Undefined
            case value === undefined:
                return "<undefined>";
            // Null
            case value === null:
                return "<null>";
            // Boolean
            case type === 'boolean' || value instanceof Boolean:
                return "<boolean> " + value.toString();
            // String
            case type === 'string' || value instanceof String:
                return "<string:" + value.length + "> \"" + value + "\"";
            // Number
            case (type === 'number' || value instanceof Number) && Number.isSafeInteger(value):
                return "<number> " + value.toString();
            case (type === 'number' || value instanceof Number) && Number.isNaN(value):
                return "<number> NaN";
            case (type === 'number' || value instanceof Number) && !Number.isFinite(value):
                return "<number> Infinity";
            case (type === 'number' || value instanceof Number) && value % 1 !== 0:
                return "<float> " + value.toString();
            // Array
            case type === 'object' && Array.isArray(value):
                return "<array:" + value.length + "> " + value.toString();
            // Function
            case type === 'function':
                return "<function> " + value.toString();
            // Symbol
            case type === 'symbol':
                return "<symbol> " + value.toString();
            // Date
            case value instanceof Date:
                return "<Date> " + value.toString();
            // RegExp
            case value instanceof RegExp:
                return "<RegExp> " + value.toString();
            // Error
            case value instanceof Error:
                return "<Error> " + value.toString();
            // Map
            case value instanceof Map:
                return "<Map:" + value.size + ">";
            // Set
            case value instanceof Set:
                return "<Set:" + value.size + ">";
            // WeakMap
            case value instanceof WeakMap:
                return "<WeakMap>";
            // WeakSet
            case value instanceof WeakSet:
                return "<WeakSet>";
            // Other type of object
            case type === 'object':
                return "<object> " + JSON.stringify(value);
            default:
                return "<" + type + ">";
        }
    };
    return ValueFormatter;
}());

var LogicException = /** @class */ (function () {
    function LogicException() {
    }
    /**
     * Throw logic exception
     * @param {assertionTypes} type
     * @param value
     * @param {string} message
     * @param {string} id
     * @returns {AssertionException}
     */
    LogicException.throw = function (type, value, message, id) {
        var msg = 'LogicException' + "\n";
        msg += (message || 'The provided value causes the LogicException') + "\n\n";
        msg += 'Value: ' + ValueFormatter.format(value) + "\n";
        return new AssertionException(type, msg, id);
    };
    return LogicException;
}());

/**
 * Assert if given value is truthy
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isTruthy(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !value) {
        throw LogicException.throw(assertionTypes.IS_TRUTHY, value, message, id);
    }
}

/**
 * Assert if given value is falsy
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isFalsy(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value) {
        throw LogicException.throw(assertionTypes.IS_FALSY, value, message, id);
    }
}

/**
 * Assert if given value is empty
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isEmpty(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled &&
        ((typeof value === 'string' && value.length === 0) ||
            (typeof value === 'number' && value === 0))) {
        throw LogicException.throw(assertionTypes.IS_EMPTY, value, message, id);
    }
}

/**
 * Assert if given value is not empty
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotEmpty(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled &&
        ((typeof value === 'string' && value.length !== 0) ||
            (typeof value === 'number' && value !== 0))) {
        throw LogicException.throw(assertionTypes.IS_NOT_EMPTY, value, message, id);
    }
}

/**
 * TypeException class used for throwing AssertionException when provided value have wrong type
 * For wrong value use ValueException class
 */
var TypeException = /** @class */ (function () {
    function TypeException() {
    }
    /**
     * Throw unexpected type error
     * Type of value provided is not compatible with expected type
     *
     * @param {assertionTypes} type
     * @param value
     * @param {string} expectedType
     * @param {string} message
     * @param {string} id
     * @returns {AssertionException}
     */
    TypeException.unexpectedType = function (type, value, expectedType, message, id) {
        var msg = 'TypeException' + "\n";
        msg += (message || 'The specified type does not match the expected type') + "\n\n";
        msg += 'Current type: ' + (typeof value) + "\n";
        msg += 'Expected type: ' + expectedType + "\n";
        return new AssertionException(type, msg, id);
    };
    /**
     * Throw expected type error
     * Type of value provided is compatible with type which is unwanted
     *
     * @param {assertionTypes} type
     * @param value
     * @param {string} unexpectedType
     * @param {string} message
     * @param {string} id
     * @returns {AssertionException}
     */
    TypeException.expectedType = function (type, value, unexpectedType, message, id) {
        var msg = 'TypeException' + "\n";
        msg += (message || 'The specified type is unwanted') + "\n\n";
        msg += 'Current type: ' + (typeof value) + "\n";
        msg += 'Unwanted type: ' + unexpectedType + "\n";
        return new AssertionException(type, msg, id);
    };
    return TypeException;
}());

/**
 * Check if provided value is defined (have type other than undefined)
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isDefined(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value === undefined) {
        throw TypeException.expectedType(assertionTypes.IS_DEFINED, value, '<undefined>', message, id);
    }
}

/**
 * Check if provided value is undefined
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isUndefined(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value !== undefined) {
        throw TypeException.unexpectedType(assertionTypes.IS_UNDEFINED, value, '<undefined>', message, id);
    }
}

/**
 * Check if provided value is boolean
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isBool(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value !== 'boolean') {
        throw TypeException.unexpectedType(assertionTypes.IS_BOOL, value, '<boolean>', message, id);
    }
}

/**
 * Check if provided value is not boolean
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotBool(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value === 'boolean') {
        throw TypeException.expectedType(assertionTypes.IS_NOT_BOOL, value, '<boolean>', message, id);
    }
}

/**
 * Check if provided value is number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNumber(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !(typeof value === 'number' || value instanceof Number)) {
        throw TypeException.unexpectedType(assertionTypes.IS_NUMBER, value, '<number>', message, id);
    }
}

/**
 * Check if provided value is not number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotNumber(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && (typeof value === 'number' || value instanceof Number)) {
        throw TypeException.expectedType(assertionTypes.IS_NOT_NUMBER, value, '<number>', message, id);
    }
}

/**
 * Check if provided value is float (number with value after decimal point)
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isFloat(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && (typeof value !== 'number' || value % 1 !== 0)) {
        throw TypeException.unexpectedType(assertionTypes.IS_FLOAT, value, '<float>', message, id);
    }
}

/**
 * Check if provided value is not float (number with value after decimal point)
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotFloat(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value === 'number' && value % 1 === 0) {
        throw TypeException.expectedType(assertionTypes.IS_NOT_FLOAT, value, '<float>', message, id);
    }
}

/**
 * Check if provided value is Not a Number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNaN(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !Number.isNaN(value)) {
        throw TypeException.unexpectedType(assertionTypes.IS_NAN, value, '<NaN>', message, id);
    }
}

/**
 * Check if provided value is other than Not a Number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotNaN(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && Number.isNaN(value)) {
        throw TypeException.expectedType(assertionTypes.IS_NOT_NAN, value, '<NaN>', message, id);
    }
}

/**
 * Check if provided value is string
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isString(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !(typeof value === 'string' || value instanceof String)) {
        throw TypeException.unexpectedType(assertionTypes.IS_STRING, value, '<string>', message, id);
    }
}

/**
 * Check if provided value is not string
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotString(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && (typeof value === 'string' || value instanceof String)) {
        throw TypeException.expectedType(assertionTypes.IS_NOT_STRING, value, '<string>', message, id);
    }
}

/**
 * Check if provided value is an array
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isArray(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !Array.isArray(value)) {
        throw TypeException.unexpectedType(assertionTypes.IS_ARRAY, value, '<array>', message, id);
    }
}

/**
 * Check if provided value is not an array
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotArray(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && Array.isArray(value)) {
        throw TypeException.expectedType(assertionTypes.IS_NOT_ARRAY, value, '<array>', message, id);
    }
}

/**
 * Check if provided value is function
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isFunction(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value !== 'function') {
        throw TypeException.expectedType(assertionTypes.IS_FUNCTION, value, '<function>', message, id);
    }
}

/**
 * Check if provided value is not function
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotFunction(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value === 'function') {
        throw TypeException.unexpectedType(assertionTypes.IS_NOT_FUNCTION, value, '<function>', message, id);
    }
}

/**
 * Check if provided value is Symbol
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isSymbol(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value !== 'symbol') {
        throw TypeException.unexpectedType(assertionTypes.IS_SYMBOL, value, '<symbol>', message, id);
    }
}

/**
 * Check if provided value is not an Symbol
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
function isNotSymbol(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && typeof value === 'symbol') {
        throw TypeException.expectedType(assertionTypes.IS_NOT_SYMBOL, value, '<symbol>', message, id);
    }
}

/**
 * ValueException class used for throwing AssertionException when provided value have wrong value
 * For wrong type of value use TypeException class
 */
var ValueException = /** @class */ (function () {
    function ValueException() {
    }
    /**
     * Throw unexpected value error
     * Value provided is not compatible with expected value
     *
     * @param {assertionTypes} type
     * @param currentValue
     * @param expectedValue
     * @param {string} message
     * @param {string} id
     * @returns {AssertionException}
     */
    ValueException.unexpectedValue = function (type, currentValue, expectedValue, message, id) {
        var msg = 'ValueException' + "\n";
        msg += (message || 'The value provided is not compatible with the expected value') + "\n\n";
        msg += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
        msg += 'Expected value: ' + ValueFormatter.format(expectedValue) + "\n";
        return new AssertionException(type, msg, id);
    };
    /**
     * Throw expected value error
     * Value provided is compatible with value which is unwanted
     *
     * @param {assertionTypes} type
     * @param currentValue
     * @param unexpectedValue
     * @param {string} message
     * @param {string} id
     * @returns {AssertionException}
     */
    ValueException.expectedValue = function (type, currentValue, unexpectedValue, message, id) {
        var msg = 'ValueException' + "\n";
        msg += (message || 'The value provided is unwanted') + "\n\n";
        msg += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
        msg += 'Unwanted value: ' + ValueFormatter.format(unexpectedValue) + "\n";
        return new AssertionException(type, msg, id);
    };
    return ValueException;
}());

/**
 * Check if provided value is an expected instance
 * @param value
 * @param {Function} expectedInstance
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isInstanceOf(value, expectedInstance, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !(value instanceof expectedInstance)) {
        throw ValueException.unexpectedValue(assertionTypes.INSTANCE_OF, value, expectedInstance, message, id);
    }
}

/**
 * Check if provided value is not instance of excluded instance
 * @param value
 * @param {Function} excludedInstance
 * @param {string} message
 * @param {string} id
 */
function isNotInstanceOf(value, excludedInstance, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value instanceof excludedInstance) {
        throw ValueException.expectedValue(assertionTypes.NOT_INSTANCE_OF, value, excludedInstance, message, id);
    }
}

/**
 * Check if provided value is true
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isTrue(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value !== true) {
        throw ValueException.unexpectedValue(assertionTypes.IS_TRUE, value, true, message, id);
    }
}

/**
 * Check if provided value is not true
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotTrue(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value === true) {
        throw ValueException.expectedValue(assertionTypes.IS_NOT_TRUE, value, true, message, id);
    }
}

/**
 * Check if provided value is false
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isFalse(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value !== false) {
        throw ValueException.unexpectedValue(assertionTypes.IS_FALSE, value, false, message, id);
    }
}

/**
 * Check if provided value is not false
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotFalse(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value === false) {
        throw ValueException.expectedValue(assertionTypes.IS_NOT_FALSE, value, false, message, id);
    }
}

/**
 * Check if provided value is null
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNull(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value !== null) {
        throw ValueException.unexpectedValue(assertionTypes.IS_NULL, value, null, message, id);
    }
}

/**
 * Check if provided value is not null
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function isNotNull(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && value === null) {
        throw ValueException.expectedValue(assertionTypes.IS_NOT_NULL, value, null, message, id);
    }
}

/**
 * Check if provided value match provided RegExp
 * @param {string} value
 * @param {RegExp} regExp
 * @param {string} message
 * @param {string} id
 * @returns {void}
 */
function match(value, regExp, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (this.enabled && !regExp.test(value)) {
        throw LogicException.throw(assertionTypes.MATCH, value, message, id);
    }
}

// Assertion types


var assert = Object.freeze({
	get assertionTypes () { return assertionTypes; },
	get enabled () { return enabled; },
	disable: disable,
	enable: enable,
	AssertionException: AssertionException,
	fail: fail,
	isTruthy: isTruthy,
	isFalsy: isFalsy,
	isEmpty: isEmpty,
	isNotEmpty: isNotEmpty,
	isDefined: isDefined,
	isUndefined: isUndefined,
	isBool: isBool,
	isNotBool: isNotBool,
	isNumber: isNumber,
	isNotNumber: isNotNumber,
	isFloat: isFloat,
	isNotFloat: isNotFloat,
	isNaN: isNaN,
	isNotNaN: isNotNaN,
	isString: isString,
	isNotString: isNotString,
	isArray: isArray,
	isNotArray: isNotArray,
	isFunction: isFunction,
	isNotFunction: isNotFunction,
	isSymbol: isSymbol,
	isNotSymbol: isNotSymbol,
	isInstanceOf: isInstanceOf,
	isNotInstanceOf: isNotInstanceOf,
	isTrue: isTrue,
	isNotTrue: isNotTrue,
	isFalse: isFalse,
	isNotFalse: isNotFalse,
	isNull: isNull,
	isNotNull: isNotNull,
	match: match
});

module.exports = assert;
//# sourceMappingURL=assert.cjs.js.map

/**
  Assert.js - javascript assertions library
  Version: 1.0.0
  Build: Sun, 18 Mar 2018 17:55:53 GMT
  @license MIT
  @preserve
*/
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
    assertionTypes[assertionTypes["IS_NULL"] = 7] = "IS_NULL";
    assertionTypes[assertionTypes["IS_NOT_NULL"] = 8] = "IS_NOT_NULL";
    assertionTypes[assertionTypes["IS_BOOL"] = 9] = "IS_BOOL";
    assertionTypes[assertionTypes["IS_NOT_BOOL"] = 10] = "IS_NOT_BOOL";
    assertionTypes[assertionTypes["IS_TRUE"] = 11] = "IS_TRUE";
    assertionTypes[assertionTypes["IS_NOT_TRUE"] = 12] = "IS_NOT_TRUE";
    assertionTypes[assertionTypes["IS_FALSE"] = 13] = "IS_FALSE";
    assertionTypes[assertionTypes["IS_NOT_FALSE"] = 14] = "IS_NOT_FALSE";
    assertionTypes[assertionTypes["IS_NUMBER"] = 15] = "IS_NUMBER";
    assertionTypes[assertionTypes["IS_NOT_NUMBER"] = 16] = "IS_NOT_NUMBER";
    assertionTypes[assertionTypes["IS_NAN"] = 17] = "IS_NAN";
    assertionTypes[assertionTypes["IS_NOT_NAN"] = 18] = "IS_NOT_NAN";
    assertionTypes[assertionTypes["IS_STRING"] = 19] = "IS_STRING";
    assertionTypes[assertionTypes["IS_NOT_STRING"] = 20] = "IS_NOT_STRING";
    assertionTypes[assertionTypes["IS_ARRAY"] = 21] = "IS_ARRAY";
    assertionTypes[assertionTypes["IS_NOT_ARRAY"] = 22] = "IS_NOT_ARRAY";
    assertionTypes[assertionTypes["IS_FUNCTION"] = 23] = "IS_FUNCTION";
    assertionTypes[assertionTypes["IS_NOT_FUNCTION"] = 24] = "IS_NOT_FUNCTION";
    assertionTypes[assertionTypes["IS_SYMBOL"] = 25] = "IS_SYMBOL";
    assertionTypes[assertionTypes["IS_NOT_SYMBOL"] = 26] = "IS_NOT_SYMBOL";
    assertionTypes[assertionTypes["INSTANCE_OF"] = 27] = "INSTANCE_OF";
    assertionTypes[assertionTypes["NOT_INSTANCE_OF"] = 28] = "NOT_INSTANCE_OF";
    assertionTypes[assertionTypes["ONE_OF_TYPE"] = 29] = "ONE_OF_TYPE";
    assertionTypes[assertionTypes["NOT_ONE_OF_TYPE"] = 30] = "NOT_ONE_OF_TYPE";
    // Expressions
    assertionTypes[assertionTypes["EQUAL"] = 31] = "EQUAL";
    assertionTypes[assertionTypes["NOT_EQUAL"] = 32] = "NOT_EQUAL";
    assertionTypes[assertionTypes["GREATER_THAN"] = 33] = "GREATER_THAN";
    assertionTypes[assertionTypes["GREATER_THAN_OR_EQUAL"] = 34] = "GREATER_THAN_OR_EQUAL";
    assertionTypes[assertionTypes["LOWER_THAN"] = 35] = "LOWER_THAN";
    assertionTypes[assertionTypes["LOWER_THAN_OR_EQUAL"] = 36] = "LOWER_THAN_OR_EQUAL";
    assertionTypes[assertionTypes["BETWEEN"] = 37] = "BETWEEN";
    assertionTypes[assertionTypes["OUTSIDE"] = 38] = "OUTSIDE";
    // Utils
})(assertionTypes || (assertionTypes = {}));

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
 * Basic assertion error class
 * It is used to be thrown when assertion failed
 * You can precise discover assertion which caused error by type or id
 * @class
 */
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(type, message, id) {
        var _this = _super.call(this, message) || this;
        _this.type = type;
        _this.id = id;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return AssertionError;
}(Error));

/**
 * Always throw AssertError
 * @param message
 * @param id
 * @returns void
 */
function fail(message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    throw new AssertionError(assertionTypes.FAIL, message, id);
}

var LogicError = /** @class */ (function () {
    function LogicError() {
    }
    LogicError.throw = function (type, value, message, id) {
        console.log('Logic error value: ', value);
        return new AssertionError(type, message, id);
    };
    return LogicError;
}());

/**
 * Assert if given value is truthy
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isTruthy(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value) {
        return value;
    }
    throw LogicError.throw(assertionTypes.IS_TRUTHY, value, message, id);
}

/**
 * Assert if given value is falsy
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isFalsy(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (!value) {
        return value;
    }
    throw LogicError.throw(assertionTypes.IS_FALSY, value, message, id);
}

/**
 * Assert if given value is empty
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isEmpty(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if ((typeof value === 'string' && value.length !== 0) ||
        (typeof value === 'number' && value !== 0) ||
        (typeof value === 'function') ||
        (typeof value === 'symbol')) {
        return value;
    }
    // Check if object has any property
    // if (typeof value === 'object' && value !== null) {
    //   for (let key in value) {
    //     if (hasOwnProperty.call(value, key)) {
    //       return value;
    //     }
    //   }
    // }
    throw LogicError.throw(assertionTypes.IS_EMPTY, value, message, id);
}

var TypeError$1 = /** @class */ (function () {
    function TypeError() {
    }
    TypeError.throw = function (type, value, expectedType, message, id) {
        message = 'TypeError' + "\n";
        message += 'The specified type does not match the expected type' + "\n\n";
        message += 'Current type: ' + (typeof value) + "\n";
        message += 'Expected type: ' + expectedType + "\n";
        return new AssertionError(type, message, id);
    };
    return TypeError;
}());

/**
 * Assert isBool
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isBool(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (typeof value === 'boolean') {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_BOOL, value, 'bool', message, id);
}

/**
 * Assert isNotBool
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isNotBool(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (typeof value !== 'boolean') {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_NOT_BOOL, value, '!bool', message, id);
}

/**
 * Assert isTrue
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isTrue(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value === true) {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_TRUE, value, 'bool[true]', message, id);
}

/**
 * Assert isNotTrue
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isNotTrue(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value !== true) {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_NOT_TRUE, value, '!true', message, id);
}

/**
 * Assert isFalse
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isFalse(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value === false) {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_FALSE, value, 'bool[false]', message, id);
}

/**
 * Assert isNotFalse
 * @param {T} value
 * @param message
 * @param id
 * @returns {T}
 */
function isNotFalse(value, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value !== false) {
        return value;
    }
    throw TypeError$1.throw(assertionTypes.IS_NOT_FALSE, value, '!false', message, id);
}

/**
 * Render any value with human readable form
 * @class
 */
var ValueFormatter = /** @class */ (function () {
    function ValueFormatter() {
    }
    ValueFormatter.format = function (value) {
        console.log(value);
        return 'rendered value ;-)';
    };
    return ValueFormatter;
}());

var UnexpectedValueError = /** @class */ (function () {
    function UnexpectedValueError() {
    }
    UnexpectedValueError.throw = function (type, currentValue, expectedValue, message, id) {
        message = 'UnexpectedValueError' + "\n";
        message += 'The value provided is not compatible with the expected value' + "\n\n";
        message += 'Current value: ' + ValueFormatter.format(currentValue) + "\n";
        message += 'Expected value: ' + ValueFormatter.format(expectedValue) + "\n";
        return new AssertionError(type, message, id);
    };
    return UnexpectedValueError;
}());

/**
 * Assert instanceOf
 * @param {T} value
 * @param expectedInstance
 * @param message
 * @param id
 * @returns {T}
 * @throws UnexpectedValueError
 */
function instanceOf(value, expectedInstance, message, id) {
    if (message === void 0) { message = ''; }
    if (id === void 0) { id = ''; }
    if (value instanceof expectedInstance) {
        return value;
    }
    throw UnexpectedValueError.throw(assertionTypes.INSTANCE_OF, value, expectedInstance, message, id);
}

// Assertion types
// Expressions
//   greater than, lower than etc.
// Utils
//   regexp assertions etc.


var assert = Object.freeze({
	get assertionTypes () { return assertionTypes; },
	AssertionError: AssertionError,
	fail: fail,
	isTruthy: isTruthy,
	isFalsy: isFalsy,
	isEmpty: isEmpty,
	isBool: isBool,
	isNotBool: isNotBool,
	isTrue: isTrue,
	isNotTrue: isNotTrue,
	isFalse: isFalse,
	isNotFalse: isNotFalse,
	instanceOf: instanceOf
});

export default assert;
//# sourceMappingURL=assert.esm.js.map

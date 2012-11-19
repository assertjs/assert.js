#!/usr/bin/env node
var funkit = require('funkit');
var suite = require('suite.js');
var assert = require('./assert');

var AssertionError = require('assert').AssertionError;

var exception = suite.exception;

// note that "exception" gives false positives in this case given we're
// testing with AssertionError (thrown by suite.js as well!)
// -> add some way to tell these from each other to suite.js

suite(assert(3).equals, [
    3, null,
    5, exception(AssertionError)
]);

suite(assert(3).not().equals, [
    10, null,
    3, exception(AssertionError)
]);

suite(assert(3).not().not().equals, [
    3, null,
    10, exception(AssertionError)
]);

// [x, y]
suite(funkit.partial(assert(3).between, -3), [
    3, null,
    6, exception(AssertionError)
]);

// [x, [
suite(assert(3).between, [
    3, null,
    1, exception(AssertionError)
]);

// ], x]
suite(funkit.partial(assert(3).between, null), [
    3, null,
    10, exception(AssertionError)
]);

suite(assert(3).isDefined, [
    undefined, null
]);

suite(assert(3).is, [
    'number', null,
    ['array', 'number'], null,
    'string', exception(AssertionError)
]);

suite(assert(3).within, [
    [3], null,
    [3, 4, 10], null,
    [7], exception(AssertionError)
]);


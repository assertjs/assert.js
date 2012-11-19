#!/usr/bin/env node
var funkit = require('funkit');
var suite = require('suite.js');
var assert = require('./assert');

suite(assert(3).equals, [
    3, null
    // TODO: AssertionError
]);

suite(assert(3).not().equals, [
    10, null
    // TODO: AssertionError
]);

suite(assert(3).not().not().equals, [
    3, null
    // TODO: AssertionError
]);

// [x, y]
suite(funkit.partial(assert(3).between, -3), [
    3, null
    // TODO: AssertionError
]);

// [x, [
suite(assert(3).between, [
    3, null
    // TODO: AssertionError
]);

// ], x]
suite(funkit.partial(assert(3).between, null), [
    3, null
    // TODO: AssertionError
]);

suite(assert(3).isDefined, [
    undefined, null
]);

suite(assert(3).is, [
    'number', null,
    ['array', 'number'], null
    // TODO: AssertionError
]);

suite(assert(3).within, [
    [3], null,
    [3, 4, 10], null
    // TODO: AssertionError
]);


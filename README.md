# assert.js - A better, chaining assert syntax

assert.js provide a simple and powerful chaining based assertion syntax. In addition there is a `not` modifier that may be used to invert the truth value of an assertion. The examples below give you some idea of the API:

```javascript
var a = 10;
var b = [1, 2, 3, 4];

assert(a).equals(10); // ok
assert(a).not().equals(11); // ok
assert(a).not().not().equals(10); // ok, double negation
assert(b).equals([1, 2, 3, 4]); // ok, note that we compare content!

assert(a).between(0, 10); // ok since 10 e [0, 10]
assert(a).between(0); // ok since 10 e [0, [
assert(a).between(null, 20); // ok since 10 e ], 10]

assert(a).isDefined(); // ok since a is not undefined

assert(a).is('number'); // ok
assert(a).is('array', 'number'); // ok, matches number

assert(a).within(2, 4, 10); // ok, matches 10
assert(a).within(3); // not ok, raises AssertionError
```

## License

assert.js is available under MIT. See LICENSE for more details.


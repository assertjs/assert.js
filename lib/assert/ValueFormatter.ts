/**
 * Render any value with human readable form
 * @class
 */
export class ValueFormatter {
  /**
   * Format value according to its type
   *
   * @param value
   * @returns {string}
   */
  static format(value: any): string {
    const type = typeof value;

    switch (true) {
      // Undefined
      case value === undefined:
        return `<undefined>`;

      // Null
      case value === null:
        return `<null>`;

      // Boolean
      case type === 'boolean' || value instanceof Boolean:
        return `<boolean> ${value.toString()}`;

      // String
      case type === 'string' || value instanceof String:
        return `<string:${value.length}> "${value}"`;

      // Number
      case (type === 'number' || value instanceof Number) && Number.isSafeInteger(value):
        return `<number> ${value.toString()}`;

      case (type === 'number' || value instanceof Number) && Number.isNaN(value):
        return `<number> NaN`;

      case (type === 'number' || value instanceof Number) && !Number.isFinite(value):
        return `<number> Infinity`;

      case (type === 'number' || value instanceof Number) && value % 1 !== 0:
        return `<float> ${value.toString()}`;

      // Array
      case type === 'object' && Array.isArray(value):
        return `<array:${value.length}> ${value.toString()}`;

      // Function
      case type === 'function':
        return `<function> ${value.toString()}`;

      // Symbol
      case type === 'symbol':
        return `<symbol> ${value.toString()}`;

      // Date
      case value instanceof Date:
        return `<Date> ${value.toString()}`;

      // RegExp
      case value instanceof RegExp:
        return `<RegExp> ${value.toString()}`;

      // Error
      case value instanceof Error:
        return `<Error> ${value.toString()}`;

      // Map
      case value instanceof Map:
        return `<Map:${value.size}>`;

      // Set
      case value instanceof Set:
        return `<Set:${value.size}>`;

      // WeakMap
      case value instanceof WeakMap:
        return `<WeakMap>`;

      // WeakSet
      case value instanceof WeakSet:
        return `<WeakSet>`;

      // Other type of object
      case type === 'object':
        return `<object> ${JSON.stringify(value)}`;

      default:
        return `<${type}>`;
    }
  }
}
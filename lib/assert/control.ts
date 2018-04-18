/**
 * Property holding status of assertions activity
 * @type {boolean}
 */
export let enabled: boolean = true;

/**
 * Disable assertions
 */
export function disable(): void {
  enabled = false;
}

/**
 * Enable assertions
 */
export function enable(): void {
  enabled = true;
}
/**
 * Minions Social-accounts SDK
 *
 * Account definitions, platforms, namespaces/purposes, and API keys
 *
 * @module @minions-social-accounts/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Social-accounts.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

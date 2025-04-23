/**
 * Formats arguments for logging, converting objects to JSON strings
 * @param {...any} args - Arguments to format
 * @returns {Array} Formatted arguments
 */
function formatArgs(...args) {
    return args.map(arg => {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (arg instanceof Error) return arg;
        if (typeof arg === 'object') {
            try {
                return JSON.stringify(arg, null, 2);
            } catch (err) {
                return `[Object] ${err.message}`;
            }
        }
        return arg;
    });
}

/**
 * Logs any number of arguments, converting objects to JSON strings
 * @param {...any} args - Any number of arguments to log
 */
export function log(...args) {
    console.log(...formatArgs(...args));
}

/**
 * Logs any number of arguments with debug level
 * @param {...any} args - Any number of arguments to log
 */
export function debug(...args) {
    console.log(...formatArgs(...args));
}

/**
 * Logs any number of arguments with error level
 * @param {...any} args - Any number of arguments to log
 */
export function error(...args) {
    console.error(...formatArgs(...args));
}

/**
 * Logs any number of arguments with warning level
 * @param {...any} args - Any number of arguments to log
 */
export function warn(...args) {
    console.warn(...formatArgs(...args));
} 
export async function tryAsync(fn, ...args) {
    try {
        const result = await fn(...args);
        return [null, result];
    }
    catch (error) {
        return [error, null];
    }
}
export function trySync(fn, ...args) {
    try {
        const result = fn(...args);
        return [null, result];
    }
    catch (error) {
        return [error, null];
    }
}
//# sourceMappingURL=index.js.map
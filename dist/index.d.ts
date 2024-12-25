export declare function tryAsync<T, Args extends any[]>(fn: (...args: Args) => Promise<T> | T, ...args: Args): Promise<[Error | null, T | null]>;
export declare function trySync<T, Args extends any[]>(fn: (...args: Args) => T, ...args: Args): [Error | null, T | null];

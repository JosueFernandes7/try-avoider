/**
 * Executes an asynchronous function and captures any errors without throwing exceptions.
 *
 * @template T - The return type of the function.
 * @template Args - The types of the arguments for the function.
 * @param fn - The asynchronous function to execute.
 * @param args - The arguments to pass to the function.
 * @returns A Promise that resolves to a tuple. The first element is the error (or null if no error occurred),
 * and the second element is the result (or null if an error occurred).
 *
 * @example
 * async function fetchData(url: string): Promise<string> {
 *   const response = await fetch(url);
 *   return response.text();
 * }
 *
 * const [error, data] = await tryAsync(fetchData, "https://example.com");
 * if (error) {
 *   console.error("An error occurred:", error.message);
 * } else {
 *   console.log("Data fetched:", data);
 * }
 */
export declare function tryAsync<T, Args extends any[]>(fn: (...args: Args) => Promise<T> | T, ...args: Args): Promise<[Error | null, T | null]>;
/**
 * Executes a synchronous function and captures any errors without throwing exceptions.
 *
 * @template T - The return type of the function.
 * @template Args - The types of the arguments for the function.
 * @param fn - The synchronous function to execute.
 * @param args - The arguments to pass to the function.
 * @returns A tuple. The first element is the error (or null if no error occurred),
 * and the second element is the result (or null if an error occurred).
 *
 * @example
 * function divide(a: number, b: number): number {
 *   if (b === 0) throw new Error("Division by zero");
 *   return a / b;
 * }
 *
 * const [error, result] = trySync(divide, 10, 2);
 * if (error) {
 *   console.error("An error occurred:", error.message);
 * } else {
 *   console.log("Division result:", result);
 * }
 */
export declare function trySync<T, Args extends any[]>(fn: (...args: Args) => T, ...args: Args): [Error | null, T | null];

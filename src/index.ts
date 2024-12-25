export async function tryAsync<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T> | T,
  ...args: Args
): Promise<[Error | null, T | null]> {
  try {
    const result = await fn(...args);
    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

export function trySync<T, Args extends any[]>(
  fn: (...args: Args) => T,
  ...args: Args
): [Error | null, T | null] {
  try {
    const result = fn(...args);
    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

import { tryAsync, trySync } from '../src/index';

describe('tryAsync', () => {
  it('should return the result when the async function succeeds', async () => {
    const mockFn = async (x: number) => x * 2;
    const [error, result] = await tryAsync(mockFn, 5);
    expect(error).toBeNull();
    expect(result).toBe(10);
  });

  it('should return the error when the async function fails', async () => {
    const mockFn = async () => {
      throw new Error('Test error');
    };
    const [error, result] = await tryAsync(mockFn);
    expect(error).not.toBeNull();
    expect(error?.message).toBe('Test error');
    expect(result).toBeNull();
  });

  it('should handle async functions with no arguments', async () => {
    const mockFn = async () => 'success';
    const [error, result] = await tryAsync(mockFn);
    expect(error).toBeNull();
    expect(result).toBe('success');
  });

  it('should handle async functions with multiple arguments', async () => {
    const mockFn = async (a: number, b: number) => a + b;
    const [error, result] = await tryAsync(mockFn, 5, 10);
    expect(error).toBeNull();
    expect(result).toBe(15);
  });
});

describe('trySync', () => {
  it('should return the result when the sync function succeeds', () => {
    const mockFn = (x: number) => x * 2;
    const [error, result] = trySync(mockFn, 5);
    expect(error).toBeNull();
    expect(result).toBe(10);
  });

  it('should return the error when the sync function fails', () => {
    const mockFn = () => {
      throw new Error('Test error');
    };
    const [error, result] = trySync(mockFn);
    expect(error).not.toBeNull();
    expect(error?.message).toBe('Test error');
    expect(result).toBeNull();
  });

  it('should handle sync functions with no arguments', () => {
    const mockFn = () => 'success';
    const [error, result] = trySync(mockFn);
    expect(error).toBeNull();
    expect(result).toBe('success');
  });

  it('should handle sync functions with multiple arguments', () => {
    const mockFn = (a: number, b: number) => a + b;
    const [error, result] = trySync(mockFn, 5, 10);
    expect(error).toBeNull();
    expect(result).toBe(15);
  });
});

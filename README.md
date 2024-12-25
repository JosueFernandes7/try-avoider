# Tryless

Tryless is a lightweight TypeScript library designed to simplify error handling in both synchronous and asynchronous functions, eliminating the need for repetitive `try-catch` blocks.

## Features

- **Async Error Handling**: Wraps async functions and returns `[error, result]`.
- **Sync Error Handling**: Wraps sync functions and returns `[error, result]`.

## Installation

```bash
npm install tryless
```

## Usage

### Async Functions

Wrap any async function using tryAsync. It takes the function and its arguments and returns an array `[error, result]`.

```typescript
import { tryAsync } from "tryless";

const asyncFunction = async (num: number) => {
  if (num < 0) throw new Error("Negative number!");
  return num * 2;
};

const [error, result] = await tryAsync(asyncFunction, 5);
if (error) {
  console.error(error.message);
} else {
  console.log(result); // 10
}
```

### Sync Functions

Wrap any sync function using trySync. It takes the function and its arguments and returns an array `[error, result]`.

```typescript
import { trySync } from "tryless";

const syncFunction = (num: number) => {
  if (num < 0) throw new Error("Negative number!");
  return num * 2;
};

const [error, result] = trySync(syncFunction, 5);
if (error) {
  console.error(error.message);
} else {
  console.log(result); // 10
}
```

### Examples

Handling Functions Without Arguments
You can use tryAsync and trySync with functions that take no arguments.

#### Async Example

```typescript
const noArgAsyncFunction = async () => "Success!";
const [error, result] = await tryAsync(noArgAsyncFunction);
console.log(error, result); // null, 'Success!'
```

#### Sync Example

```typescript
const noArgSyncFunction = () => "Success!";
const [error, result] = trySync(noArgSyncFunction);
console.log(error, result); // null, 'Success!'
```

### Handling Functions with Multiple Arguments

You can pass multiple arguments to both tryAsync and trySync.

#### Async Example

```typescript
const multiArgAsyncFunction = async (a: number, b: number) => a + b;
const [error, result] = await tryAsync(multiArgAsyncFunction, 5, 10);
console.log(error, result); // null, 15
```

#### Sync Example

```typescript
const multiArgSyncFunction = (a: number, b: number) => a + b;
const [error, result] = trySync(multiArgSyncFunction, 5, 10);
console.log(error, result); // null, 15
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
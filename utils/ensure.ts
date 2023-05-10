export function ensure<T>(arg: T | undefined | null): T {
  if (arg === undefined || arg === null)
    throw new TypeError("Invalid type match");
  return arg;
}

import { NotNullish } from './NotNullish';

export function yeet<TError extends Error = Error, TReturn = any>(
  message?: string,
  cause?: TError,
): NotNullish<TReturn>;
export function yeet<TError extends new (...args: any[]) => Error, TReturn = any>(
  ErrorClass: TError,
  ...params: ConstructorParameters<TError>
): NotNullish<TReturn>;
export function yeet<TError extends new (...args: any[]) => Error, TReturn = any>(
  messageOrErrorClass: TError | string | undefined,
  ...params: ConstructorParameters<TError>
): NotNullish<TReturn> {
  if (!messageOrErrorClass || typeof messageOrErrorClass === 'string') {
    throw new Error(messageOrErrorClass, { cause: params?.[0] });
  }

  throw new messageOrErrorClass(...params);
}

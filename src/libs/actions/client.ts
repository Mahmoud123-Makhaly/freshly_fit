'use server';

import { createSafeActionClient } from 'next-safe-action';

import { Context } from '@libs';

export const client = createSafeActionClient({
  // If you need to access validated input, you can use `parsedInput` how you want
  // in your middleware. Please note that `parsedInput` is typed unknown, as it
  // comes from an action, while middleware is an (optional) instance function.
  // Can also be a non async function.
  async middleware(parsedInput) {
    const hasTokenKey = (obj: unknown): obj is { accessToken: string } => {
      return typeof obj === 'object' && obj !== null && 'accessToken' in obj;
    };

    const accessToken = hasTokenKey(parsedInput) ? parsedInput.accessToken : undefined;

    const _context = await new Context().buildServiceContext(accessToken);
    return { _context: _context._services! };
  },
  // Can also be an async function.
  handleServerErrorLog(e) {
    // And also log it to the console.
    console.error('handleServerErrorLog error: -------> ', e);
  },
  // Can also be an async function.
  handleReturnedServerError(e) {
    console.log('handleReturnedServerError error: -------> ', e);
    return `${e.name}:${e.cause}:${e.message}:${e.stack}`;
  },
});

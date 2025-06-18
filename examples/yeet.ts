import { yeet } from '@bussin/yeet';

class ArgumentMissingError extends Error {
  constructor(
    public readonly argName: string,
    message?: string,
  ) {
    super(message ?? `Missing argument "${argName}".`);
    this.name = 'ArgumentMissingError';
  }
}

class SimpleError extends Error {
  constructor() {
    super();
    this.name = 'SimpleError';
  }
}

function testYeet(nullish?: string) {
  const notNullish = nullish ?? yeet(ArgumentMissingError, 'nullish');
  // const notNullish = nullish ?? yeet(ArgumentMissingError, 'nullish', 'optional message');
  // const notNullish = nullish ?? yeet(SimpleError);
  // const notNullish = nullish ?? yeet('argument is missing');
  // const notNullish = nullish ?? yeet();
  // const notNullish = nullish ?? yeet('argument is missing', new Error('inner error'));
  // const notNullish = nullish ?? yeet(undefined, new Error('inner error'));

  console.log(notNullish);
}

testYeet('hello world');
testYeet(); // throws

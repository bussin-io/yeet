# @bussin/yeet

[![NPM Version](https://img.shields.io/npm/v/@bussin/yeet)](https://npmjs.com/package/@bussin/yeet) [![NPM Version](https://img.shields.io/npm/dw/@bussin/yeet)](https://npmjs.com/package/@bussin/yeet) [![NPM Version](https://img.shields.io/bundlephobia/min/@bussin/yeet)](https://npmjs.com/package/@bussin/yeet)

Yeet errors inline.

License: [MIT](https://opensource.org/licenses/MIT)

## Installation

```bash
    npm install @bussin/yeet
```

## Quick Start

```TypeScript
import { yeet } from '@bussin/yeet';

function myFunc(nullish?: string) {
  const notNullish = nullish ?? yeet(Error, 'Argument "nullish" is missing.');

  console.log(notNullish);

  // ...
}

myFunc('not nullish!');
myFunc(); // throws
```

## Contributing

To contribute, all PRs should target the `develop` branch. Feature branches must be rebased onto the latest `develop` commit before merging to keep a linear git history.

## Publishing

Package releases are started by manually triggering the [Bump Version](https://github.com/bussin-io/yeet/actions/workflows/bump-version.yml) GitHub Action. The Bump Version action will create a release commit with the version bump and an associated git tag, and automatically start the [Build and Publish](https://github.com/bussin-io/yeet/actions/workflows/build-and-publish.yml) GitHub Action. The Build and Publish action requires a manual approval step from a repository admin. Once approved, the package will be published to the NPM registry.

## Support

Please create a PR if you find any missing functionality that you's like to add. For bugs, please use the [issues tracker](https://github.com/bussin-io/yeet/issues). I'd be happy to help you!

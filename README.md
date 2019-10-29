# Logger 📝

Provides basic logging functionality. Built on top of the wonderful [chalk](https://github.com/chalk/chalk).

Opinionated for my own usage.

## Install

Using npm:
```
$ npm install -D @bnguyensn/logger
```

Using yarn:
```
$ yarn add -D @bnguyensn/logger
```

## Usage

Basic usage:

```javascript
const logger = require('@bnguyensn/logger')();

logger.info('I am blue');
logger.success('I am green');
logger.warn('I am yellow');
logger.error('I am red');
```

With a base prefix and timestamp:

```javascript
const logger = require('@bnguyensn/logger')({ base: 'LOG', timestamp: true });

logger.info("I will have 'LOG' prepended and also have a timestamp");
```

## API

### `createLogger(config)`

This is the function exported by the module. You get this from calling
`require('@bnguyensn/logger')`.

`createLogger()`, when called, will return a [`Logger`](#Logger) instance.

The `config` object by default is `undefined`.

#### `config`

|Property|Type|Description|
|:---:|:---:|---|
|`base`|`string`|A string to be prepended to each logging message.
|`timestamp`|`boolean`|If `true`, will add a timestamp to each logging message.
|`timestampOptions`|`object`|See below.

#### `timestampOptions`

This object describes how the timestamp for each logging message should look like. We use Node's `toLocaleDateString()` under the hood.

Property|Type|Description
:---:|:---:|---
`locale`|`string | undefined`|See [`toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)'s `locales` parameter. If `undefined`, will attempt to use the system's locale.
`localeOptions`|`object`|See [`toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)'s `options` parameter.
`custom`|`boolean`|If `true`, will ignore both the `locale` and `localeOptions` above and use a custom date format. If Node's `toLocaleDateString()` is not supported, we will fall back to this custom date format.

### `Logger`

An instance of `Logger` is returned from calling [`createLogger()`](#createLogger(config)).

This `Logger` instance can then be used to log stuff to the terminal.

Each `Logger` has the following methods:

|Method|Description|
|:---:|---|
|`info(msg)`|Log the provided `msg` in the color blue.
|`infoEOL(msg)`|Log the provided `msg` in the color blue and append a new line at the end.
|`success(msg)`|Log the provided `msg` in the color green.
|`successEOL(msg)`|Log the provided `msg` in the color green and append a new line at the end.
|`warn(msg)`|Log the provided `msg` in the color yellow.
|`warnEOL(msg)`|Log the provided `msg` in the color yellow and append a new line at the end.
|`error(msg)`|Log the provided `msg` in the color red.
|`errorEOL(msg)`|Log the provided `msg` in the color red and append a new line at the end.

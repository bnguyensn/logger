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
const log = require('@bnguyensn/logger');

log.info('I am blue');
log.success('I am green');
log.warn('I am yellow');
log.error('I am red');

log.info('I have a base prefix and timestamp', { base: 'LOGGER', timestampOptions: {} }');
```

## API

### `<log>(msg, config)`

This represents the logging functions exported by the package. Replace`<log>` with any of the below:

|Method|Description|
|:---:|---|
|`info`|Log the provided `msg` in the color blue.
|`info`|Log the provided `msg` in the color blue and append a new line at the end.
|`success`|Log the provided `msg` in the color green.
|`successEOL`|Log the provided `msg` in the color green and append a new line at the end.
|`warn`|Log the provided `msg` in the color yellow.
|`warnEOL`|Log the provided `msg` in the color yellow and append a new line at the end.
|`error`|Log the provided `msg` in the color red.
|`errorEOL`|Log the provided `msg` in the color red and append a new line at the end.

The `config` object by default is `undefined`. Possible options are:

#### `config`

|Property|Type|Description|
|:---:|:---:|---|
|`base`|`string`|A string to be prepended to each logging message.
|`timestampOptions`|`object`|See below.

#### `timestampOptions`

This object describes how the timestamp for each logging message should look like. We use Node's `toLocaleDateString()` (if available) under the hood. Otherwise, a custom fallback datetime solution is used.

Property|Type|Description
:---:|:---:|---
`locale`|`string \| undefined`|See [`toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)'s `locales` parameter. If `undefined`, will attempt to use the system's locale.
`localeOptions`|`object`|See [`toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)'s `options` parameter.
`custom`|`boolean`|If `true`, will ignore both the `locale` and `localeOptions` above and use a custom date format. If Node's `toLocaleDateString()` is not supported, we will fall back to this custom date format.


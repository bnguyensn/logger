const log = require('../index');

function testLogger() {
  const configs = [
    {
      base: 'LOGGER',
      timestampOptions: {},
    },
    {
      base: 'LOGGER',
    },
    {
      timestampOptions: {},
    },
    undefined,
    {
      base: 'LOGGER',
      timestampOptions: {
        custom: true,
      },
    },
  ];

  configs.forEach(config => {
    console.log(
      `*** Logger outputs with config ${JSON.stringify(config)}... ***`
    );
    console.log('');

    log.info('Log info', config);
    log.infoEOL('Log info (line break)', config);
    log.success('Log success', config);
    log.successEOL('Log success (line break)', config);
    log.warn('Log warn', config);
    log.warnEOL('Log warn (line break)', config);
    log.error('Log error', config);
    log.errorEOL('Log error (line break)', config);
  });
}

testLogger();

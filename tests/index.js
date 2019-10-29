const loggerCreator = require('../index');

function testLogger() {
  const configs = [
    {
      base: 'LOGGER',
      timestamp: true,
    },
    {
      base: 'LOGGER',
    },
    {
      timestamp: true,
    },
    undefined,
    {
      base: 'LOGGER',
      timestamp: true,
      timestampOptions: {
        custom: true,
      },
    },
  ];

  const loggers = [
    loggerCreator(configs[0]),
    loggerCreator(configs[1]),
    loggerCreator(configs[2]),
    loggerCreator(configs[3]),
    loggerCreator(configs[4]),
  ];

  loggers.forEach((logger, i) => {
    console.log(
      `*** Logger outputs with config ${JSON.stringify(configs[i])}... ***`
    );
    console.log('');
    logger.info('Log info');
    logger.infoEOL('Log info (line break)');
    logger.success('Log success');
    logger.successEOL('Log success (line break)');
    logger.warn('Log warn');
    logger.warnEOL('Log warn (line break)');
    logger.error('Log error');
    logger.errorEOL('Log error (line break)');
  });
}

testLogger();

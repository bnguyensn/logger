const chalk = require('chalk');
const { EOL } = require('os');
const getTimestamp = require('./utils/getTimestamp');

const defaultConfig = {
  base: '',
  timestamp: false,
};

class Logger {
  constructor({ base, timestamp, timestampOptions } = defaultConfig) {
    this.base = base;
    this.timestamp = timestamp;
    this.timestampOptions = timestampOptions;
  }

  constructMsg(msg) {
    const baseStr = this.base ? `${this.base} • ` : '';
    const timestampStr = this.timestamp
      ? `${getTimestamp(this.timestampOptions)} • `
      : '';
    return `${baseStr}${timestampStr}${msg}`;
  }

  info(msg) {
    console.log(chalk.blueBright(this.constructMsg(msg)));
  }

  infoEOL(msg) {
    console.log(chalk.blueBright(this.constructMsg(msg)) + EOL);
  }

  success(msg) {
    console.log(chalk.greenBright(this.constructMsg(msg)));
  }

  successEOL(msg) {
    console.log(chalk.greenBright(this.constructMsg(msg)) + EOL);
  }

  warn(msg) {
    console.log(chalk.yellowBright(this.constructMsg(msg)));
  }

  warnEOL(msg) {
    console.log(chalk.yellowBright(this.constructMsg(msg)) + EOL);
  }

  error(msg) {
    console.log(chalk.redBright(this.constructMsg(msg)));
  }

  errorEOL(msg) {
    console.log(chalk.redBright(this.constructMsg(msg)) + EOL);
  }
}

function createLogger(config) {
  return new Logger(config);
}

module.exports = createLogger;

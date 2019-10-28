const chalk = require('chalk');
const { EOL } = require('os');
const getTimestamp = require('./utils/getTimestamp');

const defaultConfig = {
  base: 'logger',
  timestamp: true,
};

class Logger {
  constructor({ base, timestamp } = defaultConfig) {
    this.base = base;
    this.timestamp = timestamp;
  }

  constructMsg(msg) {
    return `${this.base} • ${this.timestamp && getTimestamp()} • ${msg}`;
  }

  logInfo(msg) {
    console.log(chalk.blueBright(this.constructMsg(msg)));
  }

  logInfoEOL(msg) {
    console.log(chalk.blueBright(this.constructMsg(msg)) + EOL);
  }

  logSuccess(msg) {
    console.log(chalk.greenBright(this.constructMsg(msg)));
  }

  logSuccessEOL(msg) {
    console.log(chalk.greenBright(this.constructMsg(msg)) + EOL);
  }

  logWarn(msg) {
    console.log(chalk.yellowBright(this.constructMsg(msg)));
  }

  logWarnEOL(msg) {
    console.log(chalk.yellowBright(this.constructMsg(msg)) + EOL);
  }

  logError(msg) {
    console.log(chalk.redBright(this.constructMsg(msg)));
  }

  logErrorEOL(msg) {
    console.log(chalk.redBright(this.constructMsg(msg)) + EOL);
  }
}

function createLogger(config) {
  return new Logger(config);
}

module.exports = createLogger;

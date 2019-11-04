const chalk = require('chalk');
const { EOL } = require('os');
const getTimestamp = require('./utils/getTimestamp');

function constructMsg(msg, config = {}) {
  const { base, timestampOptions } = config;

  const baseStr = base ? `${base} • ` : '';
  const timestampStr = timestampOptions
    ? `${getTimestamp(timestampOptions)} • `
    : '';
  return `${baseStr}${timestampStr}${msg}`;
}

function info(msg, config) {
  console.log(chalk.blueBright(constructMsg(msg, config)));
}

function infoEOL(msg, config) {
  console.log(chalk.blueBright(constructMsg(msg, config)) + EOL);
}

function success(msg, config) {
  console.log(chalk.greenBright(constructMsg(msg, config)));
}

function successEOL(msg, config) {
  console.log(chalk.greenBright(constructMsg(msg, config)) + EOL);
}

function warn(msg, config) {
  console.log(chalk.yellowBright(constructMsg(msg, config)));
}

function warnEOL(msg, config) {
  console.log(chalk.yellowBright(constructMsg(msg, config)) + EOL);
}

function error(msg, config) {
  console.log(chalk.redBright(constructMsg(msg, config)));
}

function errorEOL(msg, config) {
  console.log(chalk.redBright(constructMsg(msg, config)) + EOL);
}

module.exports = {
  info,
  infoEOL,
  success,
  successEOL,
  warn,
  warnEOL,
  error,
  errorEOL,
};

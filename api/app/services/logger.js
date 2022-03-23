import _ from 'lodash';
import winston from 'winston';

const customLevels = {
  levels: {
    error: 0,
    info: 1,
    request: 2,
    sql: 3
  },
  colors: {
    error: 'red',
    info: 'yellow',
    request: 'cyan',
    sql: 'magenta'
  }
};

const transports = [
  new (winston.transports.Console)({
    level: 'sql',
    format: optionsToFormatter({
      colorize: true,
      timestamp: true,
      handleExceptions: true,
      prettyPrint: true
    })
  })
];

export default winston.createLogger({
  transports: transports,
  levels: customLevels.levels,
  silent: transports.length === 0
});

winston.addColors(customLevels.colors);


// winston3.x changes how transports are formatting (to the worse, imho)
// use this function to translate winston 2,x options into a combined formatter
function optionsToFormatter(options) {
  const formatters = {
    timestamp: winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:SSSZ' }),
    handleExceptions: winston.format.errors({ stack: true }),
    colorize: winston.format.colorize(),
    prettyPrint: winston.format.printf(({ timestamp, level, label, message, error, ...rest }) => {
      const namespace = label ? `(${label})` : '';
      const errStack = (error) ? `\nError: ${_.get(error, 'message')}\nStack: ${_.get(error, 'stack')}` : '';
      const meta = rest && Object.keys(rest).length ? `${JSON.stringify(rest, null, 2)}` : '';

      return `${timestamp} ${level}: ${namespace} ${message} ${meta} ${errStack}`;
    })
  };

  const optionsFormatters = _.chain(options)
    .map((value, key) => (value && formatters[key]))
    .compact()
    .value();

  return winston.format.combine(...optionsFormatters);
}

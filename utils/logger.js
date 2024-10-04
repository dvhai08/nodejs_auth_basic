const appRoot = require('app-root-path');
const { transports, createLogger, format } = require('winston');
require('winston-daily-rotate-file');

var fileRotateTransport = new transports.DailyRotateFile({
    level: process.env.LOG_LEVEL || 'info',
    filename: `${appRoot}/logs/app-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        format.align(),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [
        fileRotateTransport
    ],
});
//
// If we're not in production then log to the `console`
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console());
}


module.exports = logger

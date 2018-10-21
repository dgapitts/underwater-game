const log4jsConfig = (filename) => {
  return {
    appenders: {
      summary: {
        type: 'file',
        filename: `logs/integration/${filename}.log`,
      },
      full: {
        type: 'file',
        filename: `logs/integration/${filename}-full.log`,
      },
    },
    categories: {
      default: {
        level: 'all',
        appenders: [ 'summary' ],
      },
      full: {
        level: 'all',
        appenders: [ 'full' ],
      },
    },
  };
};

module.exports = log4jsConfig;

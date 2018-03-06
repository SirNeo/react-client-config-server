console.log('Works it!');

// Using constants
console.log('MAX_RECORDS: ' + constants.MAX_RECORDS);
constants.sayHello();

// Usings config global from Config Server
console.log('URL_LOGGER2: ' + config.DATABASE_URI);


console.log('ENV: ' + process.env.NODE_ENV);
console.log('REACT_APP_CONFIG_SERVER: ' + process.env.REACT_APP_CONFIG_SERVER);
console.log('CONFIG_SERVER: ' + process.env.CONFIG_SERVER);
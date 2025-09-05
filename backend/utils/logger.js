const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(
  path.join(__dirname, '../logs/backend.log'), 
  { flags: 'a' }
);

const logger = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] LOG: ${message}\n`);
    console.log(message);
  },
  error: (message) => {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] ERROR: ${message}\n`);
    console.error(message);
  }
};

module.exports = logger;
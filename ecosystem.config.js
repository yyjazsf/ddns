/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('./package.json');
const path = require('path');
const instances = require('os').cpus().length;

const { PORT, NODE_ENV } = process.env;

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/app.js'),
      instances: instances,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV,
        PORT,
      },
    },
  ],
};

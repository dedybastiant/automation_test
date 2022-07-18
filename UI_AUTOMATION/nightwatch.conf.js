const seleniumServer = require("selenium-server");

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/steps-definition', 
    '--format', 'json:reports/cucumber.json', 
    '--format', 'node_modules/cucumber-pretty', 
    'tests/features'],
});

const nightwatchConfig = {
  test_workers: false,
  page_objects_path: 'tests/page-objects',
  output_folder: 'reports',
  src_folders: ['tests'],

  selenium: { // selenium configuration settings
    start_process: true, // tells nightwatch to manage the selenium process
    server_path: seleniumServer.path, // path to selenium
    host: '127.0.0.1', // host for selenium
    port: '4444', // port for selenium
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'chrome',
      }
    }
  }
}

module.exports = nightwatchConfig;
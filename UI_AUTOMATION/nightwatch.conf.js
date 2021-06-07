const chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/steps-definition', 
    '--format', 'json:reports/cucumber.json', 
    '--format', 'node_modules/cucumber-pretty', 
    'tests/features'],
});

const nightwatchConfig = {
  page_objects_path: 'tests/page-objects',
  output_folder: 'reports',
  src_folders: ['tests'],
  webdriver: {
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
    },
  }
}

module.exports = nightwatchConfig;
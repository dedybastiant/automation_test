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
  test_workers: false,
  page_objects_path: 'tests/page-objects',
  output_folder: 'reports',
  src_folders: ['tests'],

  test_settings: {
    default: {
      selenium_host: 'localhost',
      selenium_port: 4444,
      screenshots: {
        enabled : true,
        on_failure : true,
        path : ''
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
    },
  }
}

module.exports = nightwatchConfig;
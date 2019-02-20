const properties = require('./nightwatch.props')
module.exports = {
  "src_folders": "Yoodlize/Yoodlize Tests",
  "page_objects_path": "Yoodlize/Yoodlize pageObjects",

  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 4445,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
      "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
      "webdriver.edge.driver": properties.resourcePath + properties.edgedriver
    }
  },

  "test_settings": {
    "test_workers": true,
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4445,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}
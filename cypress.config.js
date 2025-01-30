const { defineConfig } = require("cypress");
const cypress = require("cypress");
module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    chromeWebSecurity: false,
    reporter: 'mocha-allure-reporter',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
          require('cypress-mochawesome-reporter/plugin')(on),
          allureWriter(on, config);
      });
          return config;    
    },
    include: [".node_modules/cypress", 'cypress/**/*.js'],
    baseUrl: 'https://cmms.dev.aegislabs.work/#/page/assets/meters-&-groups'
    },
  },
});

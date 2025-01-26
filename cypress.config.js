const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://cmms.dev.aegislabs.work/#/page/assets/meters-&-groups",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

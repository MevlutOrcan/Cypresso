const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl : "https://www.google.com",
    projectId: "gxgp1q",

    "video" : false,
    //Testlerin video kaydini kapatiyor
    // default olarak "video" : true kabul ediyor ve video kaydi yapiyor

   // "retries" : 2
    // "retries": 2 bir kere calistirdiktan sonra hata alirsa 2 defa daha dene
  },
});
//cypress.config.js -->> Frame Work ile ilgili ayarlamalarin yapildigi kisim

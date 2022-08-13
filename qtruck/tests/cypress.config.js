const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = cypressBrowserPermissionsPlugin(on, config)
      return config

    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    websecurity: false,
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    //Tudo que era no cypress.json, agora entra aqui
    env: {
      //Configurando aqui as permissões do browser com cypressBrowserPermissionsPlugin
      browserPermissions:{
        notifications: "allow",
        geolocation: "allow"
      }
    }
  },
});




/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const { GoogleSocialLogin } = require("cypress-social-logins").plugins;

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", {
    GoogleSocialLogin: GoogleSocialLogin,
  });
};

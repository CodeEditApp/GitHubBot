const { createNodeMiddleware, createProbot } = require("probot");
const app = require("../../app");

module.exports = createNodeMiddleware(app, {
  probot: createProbot()
});
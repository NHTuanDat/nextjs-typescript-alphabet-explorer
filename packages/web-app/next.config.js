const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")(["@project/components", "@project/utils"])

module.exports = withPlugins([withTM])

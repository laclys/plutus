const projectName = require('../package.json').name
const version = require('../package.json').version

module.exports = {
  projectName,
  version,
  PORT: 6060,
  publicUrl: {
    test: `//`,
    uat: `//`,
    prod: `//`,
    analyze: '/'
  }
}

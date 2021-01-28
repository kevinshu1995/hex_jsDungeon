const { defaults } = require('jest-config')
module.exports = {
    // ...
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    collectCoverageFrom: ['./app/assets/js/js003.js'],
}

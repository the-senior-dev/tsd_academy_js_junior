module.exports = {
    verbose: false,
    testMatch: ['**/tests/**/*spec.js'],
    testPathIgnorePatterns: ['node_modules'],
    coveragePathIgnorePatterns: ['node_modules'],
    coverageDirectory: './coverage',
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageReporters: ['text', 'html'],
    moduleFileExtensions: ['js']
}
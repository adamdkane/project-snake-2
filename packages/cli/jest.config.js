module.exports = {
  displayName: 'cli',
  testEnvironment: 'node',
  modulePaths: [
    '<rootDir>/node_modules',
  ],
  moduleNameMapper: {
    '^@gemini-snake/core$': '<rootDir>/../core/index.js',
  },
};
module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.js',
  ],
  testEnvironmentOptions: {
    "node_modules": [
      "packages/cli/node_modules"
    ]
  }
};

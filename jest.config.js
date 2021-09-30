module.exports = {
  testIgnoresPatterns: ["/node_modules/", "/.next/"],
  setupFoilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx||ts|tsx)$" : "<rootDir>/node_modules/babel-jest"
  },
  testEnviroment: 'jsdom'
};
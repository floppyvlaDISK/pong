module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/tests/*.ts"],
  setupFiles: ["jest-canvas-mock"]
};
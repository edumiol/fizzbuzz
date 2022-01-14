/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  verbose: true,
  esModuleInterop: true
};

module.exports = config;

module.exports = async () => {
  return {
    verbose: true,
  };
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
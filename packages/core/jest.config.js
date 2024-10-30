module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@conversions/(.*)$': '<rootDir>/src/conversions/$1',
    '^@utilities/(.*)$': '<rootDir>/src/utilities/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/']
};

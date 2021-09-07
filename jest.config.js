// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};

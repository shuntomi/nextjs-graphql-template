module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  // NOTE: **.spec.ts | **.test.tsを拾うようにする
  testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx)",
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
}

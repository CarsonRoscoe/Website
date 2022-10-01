module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/dist",
  ],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "@utils/(.*)": "<rootDir>/utils/$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@components/(.*)": "<rootDir>/components/$1",
    "@apis/(.*)": "<rootDir>/apis/$1",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}

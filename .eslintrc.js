module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "import"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": [
      "error",
      {
        devDependencies: [
          "jest.setup.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx",
          "**/*.test.ts",
          "**/*.spec.ts",
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
  },
}

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  root: true,
  extends: [
    // "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "debug", "info"],
      },
    ],
    "space-before-blocks": "error",
    "no-var": "error",
  },
  overrides: [
    // {
    //   files: "[**/*.stories.*]",
    //   parser: "@typescript-eslint/parser",
    //   plugins: ["@typescript-eslint"],
    //   extends: [
    //     "airbnb-typescript/base",
    //     "eslint:recommended",
    //     "plugin:@typescript-eslint/recommended",
    //     "plugin:@typescript-eslint/eslint-recommended",
    //     "plugin:@typescript-eslint/recommended-requiring-type-checking",
    //     "plugin:prettier/recommended",
    //   ],
    //   rules: {
    //     "no-plusplus": "off",
    //     "no-underscore-dangle": "off",
    //     "import/prefer-default-export": "off",
    //     "prettier/prettier": "warn",
    //     "react/react-in-jsx-scope": "off",
    //   },
    // },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};

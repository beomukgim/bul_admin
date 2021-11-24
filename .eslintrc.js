// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     parser: "babel-eslint",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
//   overrides: [
//     {
//       files: [
//         "**/__tests__/*.{j,t}s?(x)",
//         "**/tests/unit/**/*.spec.{j,t}s?(x)",
//       ],
//       env: {
//         mocha: true,
//       },
//     },
//   ],
// };
module.exports = {
  root: true,
  parserOptions: {
      parser: "babel-eslint",
  },
  env: {
      browser: true,
  },
  extends: [
      "plugin:vue/recommended",
  ],
  plugins: [
      "vue",
  ],
  rules: {
      "nenerator-start-spacing": "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "semi": ["error", "never"],
      "no-unsafe-finally": 0,
      "no-return-assign": 0,
      "comma-dangle": ["error", "always-multiline"],
      "space-before-function-paren": ["error", "never"],
      "space-before-blocks": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true}],
  },
};
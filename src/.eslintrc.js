module.exports = {
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0, { ignorePureComponents: false }],
    "class-methods-use-this": [0],
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": [0, { vars: "all", args: "after-used" }],
    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    "max-len": [
      2,
      110,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true
      }
    ],
    "react/prop-types": [0, { ignore: "navigator" }]
  },
  globals: {
    document: true,
    window: true,
    navigator: true,
    fetch: true
  }
};

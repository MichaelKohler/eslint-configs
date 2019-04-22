"use strict";

module.exports = {
  env: {
    webextensions: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    "strict": 0,
  },
  extends: [ "@michaelkohler/eslint-config-browser" ]
};

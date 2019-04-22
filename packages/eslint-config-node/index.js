"use strict";

module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [ "node" ],
  rules: {
    "no-new-require": 2,
    "no-sync": 1,
    "no-buffer-constructor": 2,
    "no-use-before-define": 0,
    "handle-callback-err": 1,
    "security/detect-non-literal-fs-filename": 1
  },
  extends: [
    "@michaelkohler/eslint-config-base",
    "plugin:node/recommended"
  ]
};

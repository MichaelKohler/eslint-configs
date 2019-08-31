"use strict";

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: ["xss", "compat"],
  rules: {
    "xss/no-mixed-html": 2,
    "xss/no-location-href-assign": 2,
    "compat/compat": 2,
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-node-append": "warn",
    "unicorn/prefer-node-remove": "warn",
    "unicorn/prefer-text-content": "error",
  },
  extends: ["@michaelkohler/eslint-config-base"],
};

"use strict";

module.exports = {
  rules: {
    "vue/html-indent": [
      "error",
      4
    ],
    "filenames/match-regex": [
      2,
      "^[A-Za-z0-9-]+$"
    ]
  },
  extends: [
    "@michaelkohler/eslint-config-browser",
    "@michaelkohler/eslint-config-webpack",
    "plugin:vue/strongly-recommended"
  ]
};

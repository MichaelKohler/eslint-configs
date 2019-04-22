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
        "tree-shaking/no-side-effects-in-initialization": 0
    },
    extends: [ "michaelkohler-eslint-config-browser" ]
};

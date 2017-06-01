module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
      "arrow-body-style": [0],
      "arrow-parens": [0],
      "comma-dangle": 0,
      "consistent-return": [0],
      "global-require": [0],
      "max-len": [2, 200, 4, {"ignoreUrls": true}],
      "newline-per-chained-call": [0],
      "no-param-reassign": [2, { "props": false }],
      "no-return-assign": 0,
      "no-shadow": 2,
      "no-underscore-dangle": [0],
      "no-unused-expressions": [0],
      "no-unused-vars": [2, { "args": "none" }],
      "object-curly-spacing": 0,
      "object-shorthand": 0,
      "padded-blocks": 0,
      "prefer-arrow-callback": 0,
      "prefer-const": 0,
      "quote-props": [2, "as-needed", { "keywords": true, "unnecessary": false }],
      "strict": 0,
      "no-useless-escape": 1,
      "no-console": "off"
    }
};

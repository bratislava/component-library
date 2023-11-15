/* eslint-disable unicorn/prefer-module */
const noHtmlElements = require('./rules/no-html-elements')
const stringLiteralWrappedInTypography = require('./rules/string-literal-wrapped-in-typography')

module.exports = {
  rules: {
    'no-html-elements': noHtmlElements,
    'string-literal-wrapped-in-typography': stringLiteralWrappedInTypography,
  },
}

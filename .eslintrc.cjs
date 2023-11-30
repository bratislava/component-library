module.exports = {
  extends: ['auto'],
  rules: {
    /** There is no need to import react after version 17 */
    'react/react-in-jsx-scope': 'off',
    /** Named export is easier to refactor automatically */
    'import/prefer-default-export': 'off',
    /** Too tedious to type every function return explicitly */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /** We prefer arrow functions */
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    /** It's annoying to refactor from one style to another */
    'arrow-body-style': 'off',
    /** These are exceptions that we use with "__" */
    'no-underscore-dangle': [2],
    /** Turned off due to not having a great experience with enforcing this rule */
    'no-secrets/no-secrets': 'off',
    /** Too tedious */
    'eslint-comments/disable-enable-pair': 'off',
    /** We specify default props in props decomposition */
    'react/require-default-props': 'off',
    /** Avoiding extraneous dependencies in production build */
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    /** Do not work in our case */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'pii/no-phone-number': 'off',
    'xss/no-mixed-html': 'off',
  },
  ignorePatterns: ['*.config.*', '.eslintrc.js', '/dist'],
}

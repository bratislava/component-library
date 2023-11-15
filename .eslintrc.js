module.exports = {
  extends: ['auto'],
  plugins: ['bratislava-eslint'],

  rules: {
    'bratislava-eslint/no-html-elements': 'warn',
    'bratislava-eslint/string-literal-wrapped-in-typography': 'warn',
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
    /** Links get confused for secrets */
    'no-secrets/no-secrets': ['warn', { ignoreContent: '^http' }],
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
  ignorePatterns: ['*.config.*', '.eslintrc.js', '/dist', '/lib/components/Typography.tsx'],
}

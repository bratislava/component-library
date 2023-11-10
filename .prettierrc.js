module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  // These libraries for handling classes are not yet used. But i will leave this rule here for future development
  // tailwindFunctions: ['cx', 'classnames', 'clsx', 'cn', 'twMerge', 'tw'],
  tailwindConfig: './tailwind.config.js',
}

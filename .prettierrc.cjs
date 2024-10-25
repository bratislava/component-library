module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tailwindFunctions: ['cn', 'twMerge', 'clsx'],
  tailwindConfig: './tailwind.config.js',
}

/* eslint-disable unicorn/prefer-module */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce wrapping text in a Typography component',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      JSXText(node) {
        const { parent, value } = node

        // Check if the text node has non-whitespace content
        const hasTextContent = /\S/.test(value)

        if (
          hasTextContent &&
          parent &&
          parent.type === 'JSXElement' &&
          parent.openingElement.name.name !== 'Typography'
        ) {
          context.report({
            node,
            message: 'Text should be wrapped in Typography component',
            fix(fixer) {
              return fixer.replaceText(node, `<Typography>${value}</Typography>`)
            },
          })
        }
      },
    }
  },
}

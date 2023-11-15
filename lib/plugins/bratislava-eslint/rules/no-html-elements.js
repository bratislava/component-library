/* eslint-disable unicorn/prefer-module */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce the use of typography components instead of HTML elements',
      category: 'Stylistic Issues',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      JSXElement(node) {
        const openingElementName = node.openingElement.name.name

        const forbiddenElements = ['p', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

        if (forbiddenElements.includes(openingElementName)) {
          const childNode = node.children[0]

          context.report({
            node,
            message: `Unexpected use of <${openingElementName}> element.`,
            fix(fixer) {
              return fixer.replaceText(
                node,
                `<Typography type="${openingElementName}">${context
                  .getSourceCode()
                  .getText(childNode)}</Typography>`,
              )
            },
          })
        }
      },
    }
  },
}

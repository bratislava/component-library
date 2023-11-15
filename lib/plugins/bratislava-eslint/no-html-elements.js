/* eslint-disable unicorn/prefer-module */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce the use of typography components instead of HTML elements',
      category: 'Stylistic Issues',
      recommended: true,
    },
  },
  create(context) {
    return {
      JSXElement(node) {
        const openingElementName = node.openingElement.name.name

        const forbiddenElements = ['p', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        const forbiddenContent = ['Literal']

        if (forbiddenElements.includes(openingElementName)) {
          const elementChildren = node.children

          const containsForbiddenContent = elementChildren.find((child) => {
            return forbiddenContent.has(child.type)
          })
          if (containsForbiddenContent) {
            context.report({
              node,
              message: 'Unexpected child type in element',
            })
          }
        }
      },
    }
  },
}

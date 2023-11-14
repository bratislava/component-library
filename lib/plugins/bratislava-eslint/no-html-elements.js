export const meta = {
  type: 'problem',
  docs: {
    description: 'Enforce the use of typography components instead of HTML elements',
    category: 'Stylistic Issues',
    recommended: true,
  },
}

export const create = function create(context) {
  return {
    JSXOpeningElement(node) {
      const forbiddenElements = ['p', 'label', 'h1'] // Here, we can add more elements, as we please

      if (forbiddenElements.includes(node.name.name)) {
        context.report({
          node,
          message: `Use typography component instead of HTML element "${node.name.name}"`,
        })
      }
    },
  }
}

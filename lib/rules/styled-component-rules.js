module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow named imports from default import styled-components',
      recommended: false
    },
    schema: []
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'styled-components') {
          return;
        }

        const defaultImport = node.specifiers.find(s => s.imported.name === 'default');
        if (!defaultImport) {
          return;
        }

        node.specifiers
          .filter(s => s.imported.name !== 'default')
          .forEach(s => context.report({
            node: s,
            message: 'Named import from styled-components default import is not allowed'
          }));
      }
    };
  }
};
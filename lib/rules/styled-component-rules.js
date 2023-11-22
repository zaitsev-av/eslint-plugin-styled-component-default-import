// your-eslint-plugin/lib/rules/your-custom-rule.js
module.exports = {
  rules: {
    'custom-no-named-as-default': {
      create: function (context) {
        return {
          ImportDeclaration(node) {
            const source = node.source.value;
            const defaultSpecifier = node.specifiers.find(specifier => specifier.type === 'ImportDefaultSpecifier');

            if (defaultSpecifier && defaultSpecifier.local.name === 'styled' && source === 'styled-components') {
              // Если импорт styled из библиотеки styled-components с использованием default, не выдаем предупреждение
              return;
            }

            // В противном случае, если импорт styled не из styled-components с использованием default, выдаем предупреждение
            context.report({
              node,
              message: "Do not use default imports for named exports",
            });
          },
        };
      },
    },
  },
};

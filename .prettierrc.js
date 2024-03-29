module.exports = {
  overrides: [
    {
      files: '*.js',
      options: {
        arrowParens: 'avoid',
        bracketSpacing: false,
        jsxBracketSameLine: true,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    },
    {
      files: '*.md',
      options: {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 66,
        proseWrap: 'preserve',
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
      },
    },
    {
      files: ['*.scss', '*.css'],
      options: {
        printWidth: 80,
        endOfLine: 'auto',
      },
    },
  ],
};

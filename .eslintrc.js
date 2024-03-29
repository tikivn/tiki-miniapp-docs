module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    'mdx/code-blocks': false,
  },
};

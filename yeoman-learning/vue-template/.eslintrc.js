module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      // 针对会被 ESLint 格式化的文件类型，Prettier 会作为 ESLint 的一个规则运行并格式化文件，因此需要添加如下配置
      {
        tabWidth: 4,
        singleQuote: true,
        printWidth: 160,
      },
    ],
  },
}

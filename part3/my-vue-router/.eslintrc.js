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
        'prettier/prettier': [
            'error',
            // 针对会被 ESLint 格式化的文件类型，Prettier 会作为 ESLint 的一个规则运行并格式化文件，因此需要添加如下配置
            {
                printWidth: 130,
                tabWidth: 4,
                useTabs: false,
                semi: false,
                singleQuote: true,
                arrowParens: 'avoid',
                bracketSpacing: true,
                jsxBracketSameLine: true,
                endOfLine: 'auto',
                eslintIntegration: true,
                htmlWhitespaceSensitivity: 'ignore',
                trailingComma: 'all',
            },
        ],
    },
}

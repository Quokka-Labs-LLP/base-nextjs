module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESlint parser
    extends: [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
         // Enables eslint-lugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array 
    ],
    parserOptions: {
        ecmaVersion: 2020,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true  // Allows for the parsing of JSX
        }
    },
    rules: {},
    settings: {
        react: {
            version: 'detect'  // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    }
}
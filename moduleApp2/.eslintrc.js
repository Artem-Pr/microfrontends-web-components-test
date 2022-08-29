module.exports = {
    env: {
        es6: true,
        amd: true,
        browser: true
    },
    rules: {
        "for-direction": "error", // https://eslint.org/docs/rules/for-direction
        
        "getter-return": "error", // https://eslint.org/docs/rules/getter-return

        "no-setter-return": "error", // https://eslint.org/docs/rules/no-setter-return

        "no-compare-neg-zero": "error", // https://eslint.org/docs/rules/no-compare-neg-zero

        "no-cond-assign": "error", // https://eslint.org/docs/rules/no-cond-assign

        "no-console": "error", // https://eslint.org/docs/rules/no-console

        "no-debugger": "error", // https://eslint.org/docs/rules/no-debugger

        "no-dupe-else-if": "error", // https://eslint.org/docs/rules/no-dupe-else-if

        "no-dupe-keys": "error", // https://eslint.org/docs/rules/no-dupe-keys

        "no-duplicate-case": "error", // https://eslint.org/docs/rules/no-duplicate-case

        "no-ex-assign": "error", // https://eslint.org/docs/rules/no-ex-assign

        "no-extra-semi": "error", // https://eslint.org/docs/rules/no-extra-semi

        "no-import-assign": "error", // https://eslint.org/docs/rules/no-import-assign

        "no-sparse-arrays": "error", // https://eslint.org/docs/rules/no-sparse-arrays

        "no-template-curly-in-string": "error", // https://eslint.org/docs/rules/no-template-curly-in-string

        "no-unexpected-multiline": "error", // https://eslint.org/docs/rules/no-unexpected-multiline

        "no-unreachable": "error", // https://eslint.org/docs/rules/no-unreachable

        "no-unsafe-finally": "error", // https://eslint.org/docs/rules/no-unsafe-finally

        "use-isnan": "error", // https://eslint.org/docs/rules/use-isnan
        
        "default-case": "error", // https://eslint.org/docs/rules/default-case

        "default-case-last": "error", // https://eslint.org/docs/rules/default-case-last

        "eqeqeq": ["error", "always"], // https://eslint.org/docs/rules/eqeqeq

        "no-alert": "error", // https://eslint.org/docs/rules/no-alert

        "no-empty-pattern": "error", // https://eslint.org/docs/rules/no-empty-pattern

        "no-redeclare": "error", // https://eslint.org/docs/rules/no-redeclare

        "no-self-compare": "error", // https://eslint.org/docs/rules/no-self-compare

        "radix": "error", // https://eslint.org/docs/rules/radix

        "yoda": ["error", "always"], // https://eslint.org/docs/rules/yoda

        "init-declarations": ["error", "always"], // https://eslint.org/docs/rules/init-declarations

        "no-delete-var": "error", // https://eslint.org/docs/rules/no-delete-var

        "no-shadow-restricted-names": "error", // https://eslint.org/docs/rules/no-shadow-restricted-names

        "no-unused-vars": "error", // https://eslint.org/docs/rules/no-unused-vars

        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"], // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs

        "semi": "error", // https://eslint.org/docs/rules/semi

        "no-multi-spaces": "error", // https://eslint.org/docs/rules/no-multi-spaces

        "space-in-parens": ["error", "never"], // https://eslint.org/docs/rules/space-in-parens

        "no-multiple-empty-lines": 
            ["error", 
                {
                    "max": 2, "maxEOF": 0
                }
            ], // https://eslint.org/docs/rules/no-multiple-empty-lines

        "prefer-const": "error", // https://eslint.org/docs/rules/prefer-const

        "quotes": [ "error", "single"], // https://eslint.org/docs/rules/quotes

        "no-undef": "error", // https://eslint.org/docs/rules/no-undef

        "object-curly-spacing": ["error", "never"], // https://eslint.org/docs/rules/object-curly-spacing

        "array-bracket-spacing": ["error", "never"], // https://eslint.org/docs/rules/array-bracket-spacing

        "key-spacing": 
            ["error", 
                {
                    beforeColon: false, 
                    afterColon: true, 
                    mode: "strict"
                }
            ], // https://eslint.org/docs/rules/key-spacing

        "prefer-template": "error", // https://eslint.org/docs/rules/prefer-template

        "prefer-arrow-callback": "error", // https://eslint.org/docs/rules/prefer-arrow-callback

        "arrow-parens": ["error", "as-needed"], // https://eslint.org/docs/rules/arrow-parens

        "comma-spacing": 
            ["error", 
                {
                    before: false, 
                    after: true
                }
            ], // https://eslint.org/docs/rules/comma-spacing

        "template-curly-spacing": "error", // https://eslint.org/docs/rules/template-curly-spacing

        "newline-per-chained-call": 
            ["error", 
                {
                    "ignoreChainWithDepth": 2
                }
            ], // https://eslint.org/docs/rules/newline-per-chained-call
            
        "one-var": ["error", "never"], // https://eslint.org/docs/rules/one-var

        "one-var-declaration-per-line": ["error", "always"], // https://eslint.org/docs/rules/one-var-declaration-per-line

        "brace-style": "error", // https://eslint.org/docs/rules/brace-style

        "id-length": "error", // https://eslint.org/docs/rules/id-length

        "react/display-name": "off"
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    plugins: [
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    settings: {
        react: {
            version: "detect",
            pragma: "React"
        }
    }
}
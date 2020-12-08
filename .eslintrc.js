module.exports = {
    extends: [        
        'plugin:@typescript-eslint/recommended',        
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended', 
        'plugin:vue/essential',  
        "prettier",
        "prettier/vue"                
    ],
    plugins: ["vue", "@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        parser: '@typescript-eslint/parser',
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/camelcase": 0
    }
};
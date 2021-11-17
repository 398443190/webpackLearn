module.exports = {
    parser: "vue-eslint-parser",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            extends: [
                "plugin:vue/recommended",
                "plugin:prettier/recommended",
                "plugin:@typescript-eslint/recommended",
            ],
        },
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
    },
    // ...
};
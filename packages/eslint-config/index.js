module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"standard-with-typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	ignorePatterns: [
		"dist",
		"coverage",
		"cypress",
		".eslintrc.cjs",
		"vite.config.ts",
		"cypress.config.ts",
		"*.cy.ts",
		"cypress-config/index.ts",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "react-refresh", "prettier", "functional"],
	rules: {
		// Prettier configs
		indent: "off",
		"prettier/prettier": [2, { useTabs: true }],

		// Import order
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
				],
				"newlines-between": "never",
			},
		],

		// Alert about using == instead ===
		eqeqeq: "warn",

		// Prevent use console log
		"no-console": ["error", { allow: ["warn", "error"] }],

		// React
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react-refresh/only-export-components": [
			"off",
			{ allowConstantExport: true },
		],

		// Prefer readonly types
		"functional/prefer-property-signatures": "error",
		"functional/prefer-readonly-type": [
			"error",
			{
				allowLocalMutation: true,
				allowMutableReturnType: false,
				checkImplicit: false,
				ignoreClass: false,
				ignoreInterface: false,
			},
		],

		// Rest...
		"no-case-declarations": "off",
		"@typescript-eslint/consistent-type-assertions": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-non-null-assertion": "warn",
		"@typescript-eslint/non-nullable-type-assertion-style": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/triple-slash-reference": "off",
	},
};

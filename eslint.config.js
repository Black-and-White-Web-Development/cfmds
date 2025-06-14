import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
	{
		ignores: ["dist"],
	},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"react-x": reactX,
			"react-dom": reactDom,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			...reactX.configs["recommended-typescript"].rules,
			...reactDom.configs.recommended.rules,
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
					pathGroups: [
						{ pattern: "react", group: "external", position: "before" },
						{ pattern: "@/hooks/**", group: "internal", position: "before" },
						{ pattern: "@/utils/**", group: "internal", position: "before" },
						{ pattern: "@/components/**", group: "internal", position: "after" },
						{ pattern: "./**/*.scss", group: "sibling", position: "after" },
					],
					pathGroupsExcludedImportTypes: ["react"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	}
);

import { defineConfig } from "eslint-define-config";

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config = defineConfig({
	extends: ["plugin:unicorn/recommended"],
	plugins: ["unicorn"],

	rules: {
		"unicorn/prefer-query-selector": ["off"],
		"unicorn/prefer-spread": ["off"],
		"unicorn/no-useless-undefined": ["off"],
	},
});

export default config;

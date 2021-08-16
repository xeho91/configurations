import { defineConfig } from "eslint-define-config";

// https://github.com/vuejs/eslint-plugin-vue
const config = defineConfig({
	extends: ["plugin:vue/vue3-recommended"],
	plugins: ["vue"],

	parserOptions: {
		parser: "vue-eslint-parser",
		extraFileExtensions: [".vue"],
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
});

export default config;

import { defineConfig } from "eslint-define-config";

// https://github.com/typescript-eslint/typescript-eslint
const config = defineConfig({
	extends: ["plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
});

export default config;

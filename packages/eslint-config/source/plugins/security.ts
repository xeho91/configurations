import { defineConfig } from "eslint-define-config";

// https://github.com/nodesecurity/eslint-plugin-security
const config = defineConfig({
	extends: ["plugin:security/recommended"],
	plugins: ["security"],
});

export default config;

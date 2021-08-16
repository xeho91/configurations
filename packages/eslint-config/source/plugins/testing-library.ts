import { defineConfig } from "eslint-define-config";

// https://github.com/testing-library/eslint-plugin-testing-library
// https://github.com/testing-library/eslint-plugin-jest-dom
const config = defineConfig({
	extends: ["plugin:jest-dom/recommended"],
	plugins: ["jest-dom", "testing-library"],
});

export default config;

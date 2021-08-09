// https://github.com/okonet/lint-staged

const cmdESLint = "eslint";
const cmdTypeScriptCompiler = 'tsc --project "tsconfig.json" --noEmit';
const cmdSvelteCheck = "svelte-check";

const config = {
	"**/*": ["ls-lint"],
	"**/*.{js,ts,jsx,tsx,vue}": () => [cmdTypeScriptCompiler],
	"**/*.svelte": [cmdSvelteCheck],
	"**/*.{js,ts,jsx,tsx,svelte,vue}": [cmdESLint],
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;

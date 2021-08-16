import type { Configuration } from "stylelint";

// https://stylelint.io/user-guide/rules/list
const config: Partial<Configuration> = {
	ignoreFiles: [
		// Unignore files starting with dot (usually config files)
		"!.*",
		// Ignore directories
		".git/**/*",
		".husky/**/*",
		".svelte-kit/**/*",
		".vercel/**/*",
		".vercel_build_output/**/*",
		"build/**/*",
		"lib/**/*",
		"dist/**/*",
		"node_modules/**/*",
	],

	extends: [
		// https://github.com/stylelint/stylelint-config-standard
		"stylelint-config-recommended",
	],

	rules: {
		//
	},
};

export default config;

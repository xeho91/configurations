import type { Configuration } from "stylelint";

// https://github.com/kristerkari/stylelint-scss
const config: Partial<Configuration> = {
	plugins: ["stylelint-scss"],

	rules: {
		"at-rule-no-unknown": false,
		"no-invalid-position-at-import-rule": false,
		"scss/at-rule-no-unknown": true,
	},
};

export default config;

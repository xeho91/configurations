import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.svelte": [
		hasModule("svelte-check") && "svelte-check",
		hasModule("eslint") && "eslint",
		hasModule("stylelint") && "stylelint",
	].filter(Boolean),
};

export default config;

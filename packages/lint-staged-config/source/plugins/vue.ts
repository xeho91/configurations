import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.vue": (): string[] => {
		return [
			hasModule("typescript") && 'tsc --project "tsconfig.json" --noEmit',
			hasModule("eslint") && "eslint",
			hasModule("stylelint") && "stylelint",
		].filter(Boolean);
	},
};

export default config;

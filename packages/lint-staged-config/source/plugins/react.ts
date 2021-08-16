import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.{jsx,tsx}": (): string[] => {
		return [
			hasModule("typescript") && 'tsc --project "tsconfig.json" --noEmit',
			hasModule("eslint") && "eslint",
		].filter(Boolean);
	},
};

export default config;

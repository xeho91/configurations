import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.css": [hasModule("stylelint") && "stylelint"],
};

export default config;

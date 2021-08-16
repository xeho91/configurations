import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.scss": [hasModule("stylelint") && "stylelint"],
};

export default config;

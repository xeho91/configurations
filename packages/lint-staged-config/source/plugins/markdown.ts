import { hasModule } from "@xeho91/helpers";

const config = {
	"**/*.md": [hasModule("markdownlint") && "markdownlint"],
};

export default config;

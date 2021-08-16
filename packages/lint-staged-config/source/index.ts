// https://github.com/okonet/lint-staged

/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */

import merge from "deepmerge";
import { hasModule } from "@xeho91/helpers";

const configurations = [
	hasModule("ls-lint") && require("./plugins/ls-lint").default,
	require("./plugins/stylesheets").default,
	hasModule("sass") && require("./plugins/sass").default,
	require("./plugins/javascript").default,
	hasModule("react") && require("./plugins/react").default,
	hasModule("svelte") && require("./plugins/svelte").default,
	hasModule("vue") && require("./plugins/vue").default,
	require("./plugins/markdown").default,
].filter(Boolean);

const config = merge.all(configurations);

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;

/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import { hasModule } from "@xeho91/helpers";

const configurations = [
	require("./prettier").default,
	hasModule("svelte") && require("./extensions/svelte").default,
	require("./extensions/yaml").default,
].filter(Boolean);

module.exports = merge.all(configurations);

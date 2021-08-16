/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import { hasModule } from "@xeho91/helpers";

const configurations = [
	require("./eslint").default,
	require("./plugins/compat").default,
	require("./plugins/html").default,
	require("./plugins/markdown").default,
	hasModule("@types/node") && require("./plugins/node").default,
	require("./plugins/promise").default,
	require("./plugins/regexp").default,
	require("./plugins/security").default,
	hasModule("svelte") && require("./plugins/svelte").default,
	hasModule("@testing-library/jest-dom") && require("./plugins/testing-library").default,
	hasModule("typescript") && require("./plugins/typescript").default,
	hasModule("react") && require("./plugins/react").default,
	require("./plugins/unicorn").default,
	hasModule("@vue/cli") && require("./plugins/vue").default,
	require("./plugins/xss").default,
].filter(Boolean);

const config = merge.all(configurations);

module.exports = config;

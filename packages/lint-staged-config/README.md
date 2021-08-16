# @xeho91/lint-staged-config

[![npm version shield]][npm package url]
[![npm package shield]][npm package url]
[![Dependencies shield]][dependencies url]

**Extendable** [lint-staged] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/lint-staged-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/lint-staged-config?style=for-the-badge
[npm package url]: https://www.npmjs.com/package/@xeho91/lint-staged-config
[dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/lint-staged-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/xeho91%2Flint-staged-config "Dependencies status"
[lint-staged]: https://github.com/okonet/lint-staged
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## ⚙️ Plugins loading conditions

This configuration load plugins and their options conditionally. If the project
has:

-   `sass` as a dependency, then it will load **[sass]** plugin
-   `svelte` as a dependency, then it will load **[svelte]** plugin
-   `react` as a dependency, then it will load **[react]** plugins
-   `vue` as a dependency, then it will load **[vue]** plugin

This configuration will also check if the linters for specific file type(s) are
available.

[sass]: ./source/plugins/sass.ts
[react]: ./source/plugins/react.ts
[svelte]: ./source/plugins/svelte.ts
[vue]: ./source/plugins/vue.ts

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

    ```sh
    pnpm install --save-dev lint-staged @xeho91/lint-staged-config
    ```

    [node.js]: https://nodejs.org/en/

1. Create an **[lint-staged configuration file]** - e.g. `.lintstagedrc.js`,
   and extend this package configuration.\
   Example:

    ```js
    // https://github.com/okonet/lint-staged

    const config = {
    	...require("@xeho91/lint-staged-config"),

    	// Add custom tweaks here...
    };

    module.exports = config;
    ```

[lint-staged configuration file]: https://github.com/okonet/lint-staged#configuration

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

    ```json
    {
    	"scripts": {
    		"lint:staged": "lint-staged --verbose"
    	}
    }
    ```

1. Run this script for manual linting:

    ```sh
    pnpm lint:staged
    ```

---

## ⚖️ License

[![License shield]][mit license]

The code is licensed under the [MIT license].

[license shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[mit license]: https://github.com/xeho91/configurations/blob/main/LICENSE

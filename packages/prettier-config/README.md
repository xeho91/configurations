# @xeho91/prettier-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [Prettier] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/prettier-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/prettier-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/prettier-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/prettier-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/@xeho91%2Fprettier-config "Dependencies status"

[Prettier]: https://prettier.io
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## ⚙️ Plugins loading conditions

This configuration load plugins and their options conditionally. If the project
has:

- `svelte` as a dependency, then it will load **[svelte]** plugin

[svelte]: ./source/plugins/svelte.ts

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev prettier @xeho91/prettier-config
   ```

   [Node.js]: https://nodejs.org/en/

1. Create a **[Prettier configuration file]** - e.g. `.prettierrc.js`, and extend
   this package configuration.\
   Example:

   ```js
   // https://prettier.io/docs/en/index.html

   /** @type import("prettier").Options */
   const config = {
		...require("@xeho91/prettier-config"),

		// tweak some options here...
   };

   module.exports = config;
   ```

   [Prettier configuration file]: https://prettier.io/docs/en/configuration.html

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

   ```json
   {
     "scripts": {
       "format": "prettier --write \"./source/**/*\"",
     }
   }
   ```

1. Run this script for manual formatting:

   ```sh
   pnpm format
   ```

---

## ⚖️ License

[![License shield]][MIT license]

The code is licensed under the [MIT license].

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[MIT license]: https://github.com/xeho91/configurations/blob/main/LICENSE

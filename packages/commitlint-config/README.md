# @xeho91/commitlint-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [commitlint] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/commitlint-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/commitlint-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/commitlint-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/commitlint-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/xeho91%2Fcommitlint-config "Dependencies status"

[commitlint]: https://commitlint.js.org/
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev commitlint @xeho91/commitlint-config
   ```

   [Node.js]: https://nodejs.org/en/

1. Create an **[commitlint configuration file]** - e.g. `.commitlintrc.js`, and
   extend this package configuration.\
   Example:

   ```js
   // https://commitlint.js.org/

   /** @type { import("commitlint/types").UserConfig } */
   const config = {
		extends: ["@xeho91/commitlint-config"],

		rules: {
			// Tweak the rules here if needed...
		},
   };

   module.exports = config;
   ```

  [commitlint configuration file]: https://commitlint.js.org/#/reference-configuration

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

   ```json
   {
     "scripts": {
	   "lint:commits": "commitlint --from \"develop\" --to \"HEAD\"",
     }
   }
   ```

1. Run this script for manual linting:

   ```sh
   pnpm lint:commits
   ```

---

## ⚖️ License

[![License shield]][MIT license]

The code is licensed under the [MIT license].

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[MIT license]: https://github.com/xeho91/configurations/blob/main/LICENSE

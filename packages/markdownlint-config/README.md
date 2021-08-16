# @xeho91/markdownlint-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [markdownlint] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/markdownlint-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/markdownlint-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/markdownlint-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/markdownlint-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/@xeho91%2Fmarkdownlint-config "Dependencies status"

[markdownlint]: https://github.com/DavidAnson/markdownlint
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev markdownlint @xeho91/markdownlint-config
   ```

   [Node.js]: https://nodejs.org/en/

1. Create a **[markdownlint configuration file]** - e.g. `.markdownlint.json`,
   and extend this package configuration.\
   Example:

   ```json
   {
     "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
     "extends": "./node_modules/@xeho91/markdownlint-config",
	 // Tweak the rules here...
   }
   ```

   [markdownlint configuration file]: https://github.com/DavidAnson/markdownlint#optionsconfig

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

   ```json
   {
     "scripts": {
       "lint:md": "markdownlint --config \".markdownlint.json\" \"**/*.md\" --ignore \"./node_modules\"",
     }
   }
   ```

1. Run this script for manual linting:

   ```sh
   pnpm lint:md
   ```

---

## ⚖️ License

[![License shield]][MIT license]

The code is licensed under the [MIT license].

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[MIT license]: https://github.com/xeho91/configurations/blob/main/LICENSE

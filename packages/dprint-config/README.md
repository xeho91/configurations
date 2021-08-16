# @xeho91/dprint-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [dprint] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/dprint-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/dprint-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/dprint-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/dprint-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/@xeho91%2Fdprint-config "Dependencies status"

[dprint]: https://dprint.dev/
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev dprint @xeho91/dprint-config
   ```

   [Node.js]: https://nodejs.org/en/

1. Create a **[dprint configuration file]** - e.g. `.dprint.json`, and extend
   this package configuration.\
   Example:

   ```json
   {
     "$schema": "https://dprint.dev/schemas/v0.json",
     "extends": "https://raw.githubusercontent.com/xeho91/dprint-config/main/dprint.json",
     "incremental": true,
	 // Tweak the rules from here...
   }
   ```

   [dprint configuration file]: https://dprint.dev/config/

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

   ```json
   {
     "scripts": {
       "format": "dprint fmt \"./source/**/*\"",
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

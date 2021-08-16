# @xeho91/stylelint-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [Stylelint] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/stylelint-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/stylelint-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/stylelint-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/stylelint-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/@xeho91%2Fstylelint-config "Dependencies status"

[Stylelint]: https://github.com/stylelint/stylelint
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## ⚙️ Plugins loading conditions

This configuration load plugins and their options conditionally. If the project
has:

- `prettier` as a dependency, then it will load **[prettier]** plugin
- `sass` as a dependency, then it will load **[scss]** plugin

[prettier]: ./source/plugins/prettier.ts
[scss]: ./source/plugins/scss.ts

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev stylelint @xeho91/eslint-config
   ```

  [Node.js]: https://nodejs.org/en/

1. Create a **[Stylelint configuration file]** - e.g. `.stylelintrc.js`, and
   extend this package configuration.\ Example:

   ```js
   // https://stylelint.io/

   /** @type { import("stylelint").Configuration } */
   const config = {
		extends: ["@xeho91/stylelint-config"],

		rules: {
			// tweak some rules here...
		},
   };

   module.exports = config;
   ```

   [Stylelint configuration file]: https://stylelint.io/user-guide/configure

1. Add this example script to your `package.json` file and in **scripts**
   option _(key)_:

   ```json
   {
     "scripts": {
	   "lint:css": "stylelint \"source/**/*.{css,scss,svelte,vue}\""
     }
   }
   ```

   📝 **NOTE:** You can reduce the file extensions to what you actually use in
   your project.

1. Run this script for manual linting:

   ```sh
   pnpm lint:css
   ```

---

## ⚖️ License

[![License shield]][MIT license]

The code is licensed under the [MIT license].

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[MIT license]: https://github.com/xeho91/configurations/blob/main/LICENSE

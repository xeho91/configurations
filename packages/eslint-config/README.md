# @xeho91/eslint-config

[![npm version shield]][npm package URL]
[![npm package shield]][npm package URL]
[![Dependencies shield]][Dependencies URL]

**Extendable** [ESLint] configuration, part of the [xeho91/configurations]
project.

[npm version shield]: https://img.shields.io/npm/v/@xeho91/eslint-config?style=for-the-badge
[npm package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/eslint-config?style=for-the-badge
[npm package URL]: https://www.npmjs.com/package/@xeho91/eslint-config

[Dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/eslint-config?style=for-the-badge
[Dependencies URL]: https://libraries.io/npm/xeho91%2Feslint-config "Dependencies status"

[ESLint]: https://github.com/eslint/eslint
[xeho91/configurations]: https://github.com/xeho91/configurations

---

## ⚙️ Plugins loading conditions

This configuration load plugins and their options conditionally. If the project
has:

- `@types/node` as a dependency, then it will load **[node]** plugin
- `svelte` as a dependency, then it will load **[svelte]** plugin
- `typescript` as a dependency, then it will load **[typescript]** plugin
- `react` as a dependency, then it will load **[react]** plugins
- `@testing-library/jest-dom` as a dependency, then it will load
  **[testing-library]** plugins
- `vue` as a dependency, then it will load **[vue]** plugin

[node]: ./source/plugins/node.ts
[typescript]: ./source/plugins/typescript.ts
[react]: ./source/plugins/react.ts
[svelte]: ./source/plugins/svelte.ts
[vue]: ./source/plugins/vue.ts
[testing-library]: ./source/plugins/testing-library.ts

---

## 🏁 Usage

1. Install it with the [Node.js] package manager of your choice.\
   Example:

   ```sh
   pnpm install --save-dev eslint @xeho91/eslint-config
   ```

   [Node.js]: https://nodejs.org/en/

1. Create an **[ESLint configuration file]** - e.g. `.eslintrc.js`, and extend
   this package configuration.\
   Example:

   ```js
   // https://eslint.org/docs/user-guide/configuring/

   const config = {
		extends: ["@xeho91/eslint-config"],

		rules: {
			// tweak some rules here...
		},
   };

   module.exports = config;
   ```

  [ESLint configuration file]: https://eslint.org/docs/user-guide/configuring/configuration-files

1. Add this example script to your `package.json` file and in **scripts**
   the options _(key)_:

   ```json
   {
     "scripts": {
       "lint:js": "eslint \"./source/**/*.{js,ts,jsx,tsx,svelte,vue}\"",
     }
   }
   ```

   📝 **NOTE:** You can reduce the file extensions to what you actually use in
   y our project.

1. Run this script for manual linting:

   ```sh
   pnpm lint:js
   ```

---

## ⚖️ License

[![License shield]][MIT license]

The code is licensed under the [MIT license].

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge
[MIT license]: https://github.com/xeho91/configurations/blob/main/LICENSE

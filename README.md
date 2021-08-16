# Configurations

This project, a [monorepo] made with [pnpm workspaces], aims to keep any tool
configuration that can be extendable across the projects with on shared config
as a dependency. Thus, to save the time spent on configuring, installation,
upgrading dependencies, etc.

[monorepo]: https://en.wikipedia.org/wiki/Monorepo
[pnpm workspaces]: https://pnpm.io/workspaces

## 🔗 Table of Content

- [Technology stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Getting started](#-getting-started)
- [Packages](#-packages)
- [Contributing](#-contributing)
- [Feedback](#-feedback)
- [Security Policy](#-security-policy)
- [License](#-license)
- [Contact](#-contact)

---

## 💻 Technology stack

This project uses the following technology stack, and there's short reasoning
as to why these choices.

### ![Git logomark] [Git]

As a core version control tool, because it can be used with [GitHub] or
[GitLab].

[Git]: https://git-scm.com/
[Git logomark]: https://api.iconify.design/simple-icons:git.svg "Git logomark"

[GitHub]: https://github.com/
[GitLab]: https://gitlab.com/

### ![Node.js logomark] [Node.js]

As JavaScript runtime for this project development.

[Node.js]: https://nodejs.org/en/
[Node.js logomark]: https://api.iconify.design/simple-icons:nodejs.svg "Node.js logomark"

### ![TypeScript logomark] [TypeScript]

As the primary programming language because it offers fantastic developer
experience thanks to its toolings, typings and helps find possible bugs.

[TypeScript]: https://www.typescriptlang.org/
[TypeScript logomark]: https://api.iconify.design/simple-icons:typescript.svg "TypeScript logomark"

---

## ⚓ Prerequisites

[![Dependencies shield]][Dependencies URL]

This project requires these tools to be able to run it locally on your device
and develop.

1. [Git] version control tool to be installed.

1. Latest [Node.js] LTS _(Long-Term Support)_ version.

1. [pnpm] - as Node.js package manager.\
   Other package managers such as [npm] or [yarn] may work; however this
   project setup is optimized for `pnpm`.

[Dependencies shield]: https://img.shields.io/librariesio/github/xeho91/configurations?style=for-the-badge
[Dependencies URL]: https://libraries.io/github/xeho91/configurations "Dependencies status"

[pnpm]: https://pnpm.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/

---

## 📦 Packages

The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

All of them are [scoped], so they are prefixed with `@xeho91/`.
My packages from this project are accessible for public use and downloandable
from the [npmjs] registry.

📝 **NOTE**: I encourage you to create your own configuration(s). There's no
universal one, and I don't want to enforce anything. You are free to use my
project as inspiration. If you had a better idea how to organize them, would
you please mind sharing? Thank you!

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[npmjs]: https://npmjs.com

| Package name | version | Package size | Dependencies status |
| ------------ | ------- | ------------ | ------------------- |
| @xeho91/[commitlint-config] | [![commitlint-config version shield]][commitlint-config package URL] | [![commitlint-config package shield]][commitlint-config package URL] | [![commitlint-config dependencies shield]][commitlint-config dependencies URL] |
| @xeho91/[eslint-config] | [![eslint-config version shield]][eslint-config package URL] | [![eslint-config package shield]][eslint-config package URL] | [![eslint-config dependencies shield]][eslint-config dependencies URL] |
| @xeho91/[markdownlint-config] | [![markdownlint-config version shield]][markdownlint-config package URL] | [![markdownlint-config package shield]][markdownlint-config package URL] | [![markdownlint-config dependencies shield]][markdownlint-config dependencies URL] |
| @xeho91/[prettier-config] | [![prettier-config version shield]][prettier-config package URL] | [![prettier-config package shield]][prettier-config package URL] | [![prettier-config dependencies shield]][prettier-config dependencies URL] |
| @xeho91/[stylelint-config] | [![stylelint-config version shield]][stylelint-config package URL] | [![stylelint-config package shield]][stylelint-config package URL] | [![stylelint-config dependencies shield]][stylelint-config dependencies URL] |

[commitlint-config]: ./packages/commitlint-config
[commitlint-config version shield]: https://img.shields.io/npm/v/@xeho91/commitlint-config?style=flat-square
[commitlint-config package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/commitlint-config?style=flat-square
[commitlint-config package URL]: https://www.npmjs.com/package/@xeho91/commitlint-config
[commitlint-config dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/commitlint-config?style=flat-square
[commitlint-config dependencies URL]: https://libraries.io/npm/@xeho91%2Fcommitlint-config "Dependencies status"

[eslint-config]: ./packages/eslint-config
[eslint-config version shield]: https://img.shields.io/npm/v/@xeho91/eslint-config?style=flat-square
[eslint-config package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/eslint-config?style=flat-square
[eslint-config package URL]: https://www.npmjs.com/package/@xeho91/eslint-config
[eslint-config dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/eslint-config?style=flat-square
[eslint-config dependencies URL]: https://libraries.io/npm/@xeho91%2Feslint-config "Dependencies status"

[markdownlint-config]: ./packages/markdownlint-config
[markdownlint-config version shield]: https://img.shields.io/npm/v/@xeho91/markdownlint-config?style=flat-square
[markdownlint-config package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/markdownlint-config?style=flat-square
[markdownlint-config package URL]: https://www.npmjs.com/package/@xeho91/markdownlint-config
[markdownlint-config dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/markdownlint-config?style=flat-square
[markdownlint-config dependencies URL]: https://libraries.io/npm/@xeho91%2Fmarkdownlint-config "Dependencies status"

[prettier-config]: ./packages/prettier-config
[prettier-config version shield]: https://img.shields.io/npm/v/@xeho91/prettier-config?style=flat-square
[prettier-config package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/prettier-config?style=flat-square
[prettier-config package URL]: https://www.npmjs.com/package/@xeho91/prettier-config
[prettier-config dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/prettier-config?style=flat-square
[prettier-config dependencies URL]: https://libraries.io/npm/@xeho91%2Fprettier-config "Dependencies status"

[stylelint-config]: ./packages/stylelint-config
[stylelint-config version shield]: https://img.shields.io/npm/v/@xeho91/stylelint-config?style=flat-square
[stylelint-config package shield]: https://img.shields.io/bundlephobia/minzip/@xeho91/stylelint-config?style=flat-square
[stylelint-config package URL]: https://www.npmjs.com/package/@xeho91/stylelint-config
[stylelint-config dependencies shield]: https://img.shields.io/librariesio/release/npm/@xeho91/stylelint-config?style=flat-square
[stylelint-config dependencies URL]: https://libraries.io/npm/@xeho91%2Fstylelint-config "Dependencies status"

---

## ⚙️ Contributing

Please take a look at the [CONTRIBUTING.md](./CONTRIBUTING.md) file, where the
development flow is explained and thoroughly described.

---

## 🔄 Feedback

**Have you found a bug?**\
Would you mind not hesitating to [open an issue] if you have time?

**Do you have a suggestion or an idea to improve this project?**\
Please [get in touch with me](#contact) or [open an issue]. I would appreciate
the effort. You can also provide a link to a resource to learn more about it to
save your time.

[open an issue]: https://github.com/xeho91/configurations/issues/new

---

## 🔒 Security Policy

For more information about the Security Policy, take a look at the
[SECURITY.md](./SECURITY.md) file.

---

## ⚖️ License

[![License shield]](./LICENSE "Project's license")

**The code** is licensed under the [MIT license](./LICENSE).

[License shield]: https://img.shields.io/github/license/xeho91/configurations?style=for-the-badge

---

## ✉️ Contact

[![PGP shield]][PGP URL]

[![Twitter shield]][Twitter]

You can contact me through:

- [my website] contact subpage
- [Twitter] DM _(Direct Messages)_
- [Polywork]
- [Keybase]

[PGP shield]: https://img.shields.io/keybase/pgp/xeho91?color=purple&style=for-the-badge
[PGP URL]: https://pgp.key-server.io/0x4B166D6B2C00D8CB "Get my PGP public key"

[Twitter shield]: https://img.shields.io/twitter/follow/xeho91?style=social
[Twitter]: https://twitter.com/xeho91

[my website]: https://xeho91.com/contact
[Polywork]: https://polywork.com/xeho91
[Keybase]: https://keybase.io/xeho91

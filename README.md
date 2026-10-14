# Portfolio

**Website:** https://najwer23.github.io

## Prerequisites

This project uses [mise](https://mise.jdx.dev) to manage Node.js and Yarn versions (see `mise.toml`).

Install mise:

```sh
# macOS (Homebrew)
brew install mise
```

Activate mise in your shell so `node` and `yarn` are available in this project. For zsh, add these lines to `~/.zshrc`, in this order (`compinit` must run before `mise activate`):

```sh
autoload -Uz compinit && compinit
eval "$(mise activate zsh)"
```

## Getting Started

```sh
mise trust      # trust mise.toml (first time only)
mise install    # install Node.js and Yarn
mise setup      # install dependencies
```

Verify the setup:

```sh
mise current    # should list node and yarn
which yarn      # should point into ~/.local/share/mise/installs/...
mise doctor     # reports problems with the setup
```

## Development

```sh
mise start
```

## Production build

```sh
mise build
```

## Preview production build

```sh
mise preview
```

## Deploy to gh-pages

```sh
mise deploy
```

## Other tasks

| Task          | Description                             |
| ------------- | --------------------------------------- |
| `mise format` | Format and lint with Biome              |
| `mise bench`  | Run benchmarks                          |
| `mise god`    | Update dependencies, install, and start |
| `mise tasks`  | List all available tasks                |

## Yarn scripts

Once mise is activated, the same scripts are available through Yarn:

```sh
yarn install
yarn start
yarn build
yarn deploy
```

## Troubleshooting

**`zsh: command not found: yarn`**
Mise isn't activated in your shell. Add the activation lines from [Prerequisites](#prerequisites) to `~/.zshrc` and restart the terminal. As a one-off, run `mise exec -- yarn install` or `mise setup`.

**`zsh: command not found: compdef`**
`compinit` must run before `mise activate` in `~/.zshrc`. Add `autoload -Uz compinit && compinit` above the `eval "$(mise activate zsh)"` line.

**Tools don't apply in the project directory**
Run `mise trust`. Mise ignores an untrusted `mise.toml`.

## Updating

Update dependencies to the latest versions:

```sh
npx npm-check-updates -u && yarn install
ncu -u && yarn install
```

Update tool versions by editing `mise.toml`, then run `mise install`. To see the newest available Yarn version:

```sh
mise latest yarn
```

# Let's connect!

**Portfolio:** https://najwer23.github.io  
**Résumé:** https://najwer23.github.io/resume  
**X:** https://twitter.com/najwer23  
**LinkedIn:** https://www.linkedin.com/in/najwer23  
**LeetCode:** https://leetcode.com/najwer23  
**NPM:** https://www.npmjs.com/~najwer23
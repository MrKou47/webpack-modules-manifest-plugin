# webpack-modules-manifest-plugin
generate file contain all bundled module.

### Install

> yarn add webpack-modules-manifest-plugin

or

> npm install webpack-modules-manifest-plugin


### Usage

```js
const WebpackModulesManifestPlugin = require('webpack-modules-manifest-plugin');

...

plugins: [
  // your plugins
  new WebpackModulesManifestPlugin()
]
```

Then check your asserts folder, there should have an `modules-manifest.json`

```sh
- your-output-folder
  - modules-manifest.json
```
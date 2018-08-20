# Draft.js MultiLine List Item plugin

*This is a plugin for the [`draft-js-plugins-editor`](https://www.draft-js-plugins.com/), a plugin system that sits on top of Draft.js.*

By default DraftJS doesn't allow you to have multiline items in lists - when you press `Shift+Return` it still adds a new list item.

This plugin adds behaviour to the editor to stay on the same list item and include a so called 'soft newline' into the list item on `Shift+Return` press.

## Usage
```sh
npm i --save draft-js-multiline-list-item-plugin
```

then import the plugin creator function

```js
import createMultilineListItemPlugin from 'draft-js-multiline-list-item-plugin'
const multiLineListItemPlugin = createMultilineListItemPlugin()
```

This can then be passed into a `draft-js-plugins-editor` component:

```js
import createMultilineListItemPlugin from 'draft-js-multiline-list-item-plugin'
import Editor from 'draft-js-plugins-editor'

const multiLineListItemPlugin = createMultilineListItemPlugin()
const plugins = [multiLineListItemPlugin]

<Editor plugins={plugins} />
```
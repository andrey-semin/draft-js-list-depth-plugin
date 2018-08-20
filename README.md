# Draft.js List Depth plugin

*This is a plugin for the [`draft-js-plugins-editor`](https://www.draft-js-plugins.com/), a plugin system that sits on top of Draft.js.*

When working with a list in DraftJS you can't decrease list depth level by pressing `Return` on an empty list item, but you would expect it to behave this way because it is a common pattern for rich text editors.

This plugin adds this missing piece of functionality. Moreover, it also adds a `Tab`/`Shift + Tab` press support to move list item to the next depth level. So you don't need to worry about this anymore!

![demo](https://github.com/andrey-semin/draft-js-list-depth-plugin/raw/master/preview.gif)

## Usage
```sh
npm i --save draft-js-list-depth-plugin
```

then import the plugin creator function

```js
import createListDepthPlugin from 'draft-js-list-depth-plugin'
const listDepthPlugin = createListDepthPlugin()
```

Plugin object can then be passed into a `draft-js-plugins-editor` component:

```js
import createListDepthPslugin from 'draft-js-list-depth-plugin'
import Editor from 'draft-js-plugins-editor'

const listDepthPlugin = createListDepthPlugin()
const plugins = [listDepthPlugin]

<Editor plugins={plugins} />
```

## Optional configuration object

You can pass options object to the plugin as you call it:
```js
const options = {
  maxDepth: 4
}

const listDepthPlugin = createListDepthPlugin(options)
```

| Option   | Description                                                          | Default value | Required |
|----------|----------------------------------------------------------------------|---------------|----------|
| maxDepth | The limit of the depth level for nested lists (zero-based numbering) | 4             | false    |
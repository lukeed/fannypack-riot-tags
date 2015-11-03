# fannypack-riot-tags
Official Fannypack task for compiling Riot.js tags

## Installation
`npm install fannypack-riot-tags --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-riot-tags')

Fannypack.Config.tags = {
  // Config.root.src + 'src' dir
  src: 'tags',
  // Config.root.src + 'dest' dir
  dest: 'javascripts',
  // Concatenated file name
  output: '-templates.js',
  // Auto-run this task in dev mode?
  watchTask: true,
  assetTask: true,
  // File extensions to watch
  extensions: ['tag']
}

Fannypack.init()
```

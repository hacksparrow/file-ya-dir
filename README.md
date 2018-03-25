# file-ya-dir

Node module for determining if a file is a "file" or a directory.

_Requires node version >= 7.6_

## Usage

```
const fyd = require('file-ya-dir')

```

**Sync**

```
fyd.getTypeSync(__dirname)        // 'dir'
fyd.getTypeSync(__filename)       // 'file'
fyd.isDirSync(__dirname)          // true
fyd.isFileSync(__filename)        // true
fyd.isDirSync(__filename)         // false
fyd.isFileSync(__dirname)         // false
```

**Async**

```
await fyd.getType(__dirname)      // 'dir'
await fyd.getType(__filename)     // 'file'
await fyd.isDir(__dirname)        // true
await fyd.isFile(__filename)      // true
await fyd.isDirSync(__filename)   // false
await fyd.isFileSync(__dirname)   // false
```

## LICENSE

[MIT](LICENSE)

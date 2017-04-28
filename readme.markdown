## tiny-text-stream

[![build status](http://img.shields.io/travis/jekrb/tiny-text-stream.svg?style=flat)](http://travis-ci.org/jekrb/tiny-text-stream)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


streamable [tiny-text](https://github.com/rachelnicole/tiny-text)

```
npm install tiny-text-stream -S
```

### Usage

``` js
const tinytext = require('tiny-text-stream')

process.stdin
  .pipe(tinytext())
  .pipe(process.stdout)
```

### API

#### const stream = leet()


##### `stream.write('makes this stream ᵗᶦᶰʸ')`
##### `stream.end('end this ᵗᶦᶰʸ stream \n')`
##### `stream.pipe(<writeable stream>)`
##### `<readable stream>.pipe(stream)`



### License

MIT

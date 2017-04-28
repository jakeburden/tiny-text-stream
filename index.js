var tinytext = require('tiny-text')
var through = require('through2')

function tinyTextStream () {
  return through(write)
}

function write (buf, enc, next) {
  var text = buf.toString()
  this.push(tinytext(text))
  next()
}

module.exports = tinyTextStream

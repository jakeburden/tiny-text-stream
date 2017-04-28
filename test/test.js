var test = require('tape')
var concat = require('concat-stream')

var tinytextStream = require('../')

test('simple', function (t) {
  t.plan(1)
  
  var stream = tinytextStream()
  stream.end('hello')
  
  stream.pipe(concat(function (body) {
    t.same(body.toString(), 'ʰᵉᶫᶫᵒ')
  }))
})

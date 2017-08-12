const { thing } = require('./thing')
const ava = require('ava').default

ava('isDir', t => {
  t.is(thing(), 'thang')
})

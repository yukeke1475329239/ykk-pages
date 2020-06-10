import test from 'ava'
import ykkPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => ykkPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(ykkPages('w'), 'w@zce.me')
  t.is(ykkPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})

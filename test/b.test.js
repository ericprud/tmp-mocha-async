const expect = require('chai').expect
const H = require('./shared')
let p = H.init(
  {b:2},
).then(
  () => H.wait('b init function', 100).then(
    () => console.log('b post-init')
  )
)

describe('describe b', () => {
  // before(() => H.setup('b inline', 300).then(() => console.log('a inline.then')))
  it('should let 2 be 2', () => {
    expect(H.b).to.equal(2)
  })
})


const expect = require('chai').expect
const H = require('./shared')
let p = H.init(
  {a:1},
  () => H.wait('a init function', 200).then(
    () => console.log('a initialized')
  )
)

describe('describe a', () => {
  p = p.then(() => H.setup('a inline', 400).then(() => console.log('a inline.then')))
  it('should let 1 be 1', () => {
    expect(H.a).to.equal(1)
  })
})

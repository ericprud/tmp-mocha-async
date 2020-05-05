const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
const H = require('./shared')
const p = H.init({a:1})
before(() => p.then(
  i =>
    console.log(i, 'a initialized', H)
))

describe('a', () => {
  it('should let 1 be 1', () => {
    expect(H.a).to.equal(1)
  })
})

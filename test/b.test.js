const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
const H = require('./shared')
const p = H.init({b:2})
before(() => p.then(
  i =>
    console.log(i, 'b initialized', H)
))

describe('b', () => {
  it('should let 2 be 2', () => {
    expect(H.b).to.equal(2)
  })
})

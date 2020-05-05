const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
const H = require('./shared')
H.init({b:2})
before(() => H.init.initialized.then(
  i =>
    console.log(i, 'b initialized', H)
))

describe('b', () => {
  it('should let 2 be 2', () => {
    expect(H.b).to.equal(2)
  })
})

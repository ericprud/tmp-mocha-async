const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
const H = require('./shared')
H.init({a:1})
before(() => H.init.initialized.then(
  i =>
    console.log(i, 'a initialized', H)
))

describe('a', () => {
  it('should let 1 be 1', () => {
    expect(H.a).to.equal(1)
  })
})

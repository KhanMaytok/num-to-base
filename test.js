var chai = require('chai')
var assert = chai.assert
var ntb = require('./index')

describe('toBase', function () {
  it('should be able to convert from base 10 to base 2', function () {
    assert.equal(ntb.toBase(1, 2), 1)
    assert.equal(ntb.toBase(10, 2), 1010)
    assert.equal(ntb.toBase(15, 2), 1111)
    assert.equal(ntb.toBase(255, 2), 11111111)
    assert.equal(ntb.toBase(256, 2), 100000000)
  })

  it('should be able to convert from base 10 to base 8', function () {
    assert.equal(ntb.toBase(1, 8), 1)
    assert.equal(ntb.toBase(10, 8), 12)
    assert.equal(ntb.toBase(15, 8), 17)
    assert.equal(ntb.toBase(255, 8), 377)
    assert.equal(ntb.toBase(256, 8), 400)
  })

  it('should be able to convert from base 10 to base 16', function () {
    assert.equal(ntb.toBase(1, 16), 1)
    assert.equal(ntb.toBase(10, 16), 'a')
    assert.equal(ntb.toBase(15, 16), 'f')
    assert.equal(ntb.toBase(255, 16), 'ff')
    assert.equal(ntb.toBase(256, 16), 100)
  })
})

describe('to10', function () {
  it('should be able to convert from base 2 to base 10', function () {
    assert.equal(ntb.to10(1, 2), 1)
    assert.equal(ntb.to10(1010, 2), 10)
    assert.equal(ntb.to10(1111, 2), 15)
    assert.equal(ntb.to10(11111111, 2), 255)
    assert.equal(ntb.to10(100000000, 2), 256)
  })
})

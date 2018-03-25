/* global describe it */

'use strict'

const assert = require('assert')
const fyd = require('../')

describe('file-ya-dir', function () {
  describe('Sync', function () {
    it('should determine dir type', function (done) {
      const type = fyd.getTypeSync(__dirname)
      assert.equal(type, 'dir')
      done()
    })
    it('should determine file type', function (done) {
      const type = fyd.getTypeSync(__filename)
      assert.equal(type, 'file')
      done()
    })
    it('should check if dir type', function (done) {
      const dirType = fyd.isDirSync(__dirname)
      assert(dirType)
      done()
    })
    it('should check if file type', function (done) {
      const fileType = fyd.isFileSync(__filename)
      assert(fileType)
      done()
    })
  })

  describe('Async', function () {
    it('should determine dir type', async function () {
      const type = await fyd.getType(__dirname)
      assert.equal(type, 'dir')
    })
    it('should determine file type', async function () {
      const type = await fyd.getType(__filename)
      assert.equal(type, 'file')
    })
    it('should check if dir type', async function () {
      const dirType = await fyd.isDir(__dirname)
      assert(dirType)
    })
    it('should check if file type', async function () {
      const fileType = await fyd.isFile(__filename)
      assert(fileType)
    })
  })
})

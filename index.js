'use strict'

const fs = require('fs')
const util = require('util')
const stat = util.promisify(fs.stat)

const DIR = 'dir'
const FILE = 'file'
const UNKNOWN = 'unknown'

async function isFile (path) {
  if (fs.existsSync(path)) {
    const stats = await stat(path)
    return stats.isFile() === true
  }
  return false
}

function isFileSync (path) {
  if (fs.existsSync(path)) {
    const stats = fs.statSync(path)
    return stats.isFile()
  }
  return false
}

async function isDir (path) {
  if (fs.existsSync(path)) {
    const stats = await stat(path)
    return stats.isDirectory() === true
  }
  return false
}

function isDirSync (path) {
  if (fs.existsSync(path)) {
    const stats = fs.statSync(path)
    return stats.isDirectory()
  }
  return false
}

async function getType (path) {
  if (await isDirSync(path)) return DIR
  else if (await isFileSync(path)) return FILE
  else return UNKNOWN
}

function getTypeSync (path) {
  if (isDirSync(path)) return DIR
  else if (isFileSync(path)) return FILE
  else return UNKNOWN
}

exports.isFile = isFile
exports.isFileSync = isFileSync
exports.isDir = isDir
exports.isDirSync = isDirSync
exports.getType = getType
exports.getTypeSync = getTypeSync

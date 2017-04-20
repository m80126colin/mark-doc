const _         = require('lodash')
const yaml      = require('yamljs')
const mathjax   = require('markdown-it-mathjax')
const markdown  = require('markdown-it')

const separator = /(^-+.*meta.*$([\s\S]*)^-+.*$)?([\s\S]*)/m
const md        = markdown().use(mathjax())

const renderer  = str => {
  const tmp = str.match(separator)
  return {
    parameters: yaml.parse( _.trim(tmp[2]) ),
    document:   md.render(  _.trim(tmp[3]) )
  }
}

module.exports = renderer